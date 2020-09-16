<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\utils\Helpers\Helper;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Session;
use PhpParser\Node\Stmt\DeclareDeclare;
use Illuminate\Support\Facades\Redirect;
use RealRashid\SweetAlert\Facades\Alert;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Auth\AuthController;
use App\Models\{Basket, Comment, Custom, Gallery, Post, Category, Setting, User};

class PageController extends ApiController
{

  public function __construct(Request $request)
  {
      $this->url = explode("/", $request->path());
      $pageUrl = '';
      if(strlen ( $this->url[0] ) <= 0){
          $pageUrl = 'anasayfa';
      }else{
          $pageUrl = array_key_exists(1, $this->url)? $this->url[1]: $this->url[0];
      }
      $this->category = Category::where('slug',$this->url[0])->first();
      $this->pages = Post::where('type','page')->take(20)->get();
      $this->posts = Post::getFilteredPosts($request->input())->where('type','post')->paginate(15);
      $this->setting = Helper::namedSettings(Setting::all());//DONE
      $this->page = Post::where('slug', $pageUrl)->first();//DONE
      $this->post = Post::where('slug', $this->url[1] ?? false)->first();
      $this->AnasayfaSlider = Custom::where('type', 'HomePageSlider')->first();
      $this->Testimonials = Custom::where('type', 'Testimonials')->first();
      $this->user = Auth::user();
      $this->products = Post::where('type','product')->paginate(12);

    //   $user = auth()->user();
    //     //dd($user);


    $this->all_products = Post::where('type','product')->get();
    $this->new_arrivals = Post::where('type','product')->orderBy('created_at','DESC')->limit(51)->get();
    $this->updated_products = Post::where('type','product')->orderBy('updated_at','DESC')->limit(51)->get();
    $this->top_rated = Post::whereHas('comments')->withCount('comments')->orderBy('comments_count', 'DESC')->limit(51)->get();
    if ($this->user){
        $this->basket_products = Basket::where('user_id',$this->user->id)->where('type','product')->where('sold',false)->get();
        $this->wishlist_products = Basket::where('type','wishlist')->where('user_id',$this->user->id)->first();
    }else{
        $this->basket_products ="";
        $this->wishlist_products = "";
    }

    $this->posts_for_blog_page = Post::where('type','post')->orderBy('created_at','desc')->paginate(4);
    $this->recent_post_blog_page = Post::where('type','post')->orderBy('created_at','desc')->limit(5)->get();
  }





  public function pageView(Request $request)
  {




      $view = 'layouts.app';
      $type =  $this->url[1]??false ? $this->url[1]??false : 'page';

      return view($view, [
          'posts' => $this->posts,
          'pages' => $this->pages,
          'page' => $this->page,
          'post' => $this->post,
          'user' => $this->user,
          'setting' => $this->setting,
          'AnasayfaSlider' => $this->AnasayfaSlider,
          'type' => $type,
          'category' => $this->url[0],
          'itemId' => $this->url[1]?? false,
          'pageFullUrl' => $request->url(),
          'recent_post_blog_page' => $this->recent_post_blog_page,
          'posts_for_blog_page' => $this->posts_for_blog_page,
          'new_arrivals' => $this->new_arrivals,
          'all_products' => $this->all_products,
          'top_rated' => $this->top_rated,
          'updated_products' => $this->updated_products,
          'products' => $this->products,
          'wishlist_products' => $this->wishlist_products,
          'basket_products' => $this->basket_products,
      ]);

  }



  public function search_product(Request $request)
  {
      if($this->url[1]=="post"){
          $post1 = Post::where('type','post')->where('title','LIKE','%'.$request->search_text.'%')->limit(4)->get();
          $post2 = Post::where('type','post')->where('content','LIKE','%'.$request->search_text.'%')->limit(2)->get();
          $post = $post1->merge($post2);
          return response()->json(['message',$post]);
      }elseif($this->url[1] == "product"){
          $post1 = Post::where('type','product')->where('title','LIKE','%'.$request->search_text.'%')->limit(4)->get();
          $post2 = Post::where('type','product')->where('content','LIKE','%'.$request->search_text.'%')->limit(3)->get();
          $post = $post1->merge($post2);
          return response()->json(['message',$post]);
      }else{
      }
  }
    public function filter_product (Request $request) {



        $search_text = $request->selectedText;


        $searchData = '' ;
        if ($search_text === NULL) {
            $searchData= Post::where('type','product')->get();
        } else {
            switch ($search_text) {
                case 'popularity':
                    $searchData = Post::where('type','=','product')->paginate(12);
                    break;
                case 'avarege':
                    $searchData =  Post::where('type','=','product')
                        ->whereHas('comments')
                        ->withCount('comments')
                        ->orderBy('comments_count', 'DESC')
                        ->take(15)
                        ->paginate(12);
                    break;
                case 'newest':
                    $searchData = Post::where('type','product')
                    ->orderBy('created_at','desc')->paginate(12);
                    break;
                case 'low_to_high':
                    $searchData = DB
                        ::table('posts')
                        ->where('type', 'product')
                        ->orderBy('price','asc')
                        ->paginate(12);
                  break;
                  case 'high_to_low':
                    $searchData = DB
                        ::table('posts')
                        ->where('type', 'product')
                        ->orderBy('price','desc')
                        ->paginate(12);
                  break;
                default:
                    $searchData  = DB::table('posts')->
                    where('type','=','product')
                    ->whereNotNull('price')
                    ->orderBy('price','desc')->paginate(12);
                    break;
            }

        }

        $result = view('pages.partials.product_list',[
            'products'=>$searchData,
        ])->render();
        return  response()->json($result);
    }

    public function render_basket(Request $request){
      if(isset($this->user)){
          $products = Basket::where('type','product')
          ->where('user_id',$this->user->id)
          ->where('sold',false)->get();

          $total_price= 0;

          foreach ($products as $product) {
              $data = json_decode($product->post);
              if(isset($data->discounted_price)){
                  $total_price+=$data->discounted_price*$product->quantity;
              }else{
                  $total_price += $data->price*$product->quantity;
              }
          }

          $result = view('pages.partials.cart',[
              'products_in_basket'=>$products,
              'user'=>$this->user,
              'setting'=>$this->setting,
              'total_price'=>$total_price,
          ])->render();
          return  response()->json($result);
      }
        $result = view('pages.partials.cart',[
             'setting'=>$this->setting,
             'user'=>$this->user,

        ])->render();
        return  response()->json($result);
    }



    public function add_to_basket(Request $request){
        if($this->user){
            $cart = Helper::userBasketControl($this->user,$request->product_id,$request->qty);
        } else {
             $cart = Helper::guestBasketControl($request->product_id,$request->qty);

             session()->put('cart', collect($cart));
            return $this->render_basket($request);
        }
    }
    public function delete_from_basket(Request $request){
      if ($request->is_from_page == -1){
          if($request->product_id) {

              $cart = session()->get('cart');

              if(isset($cart[$request->product_id])) {
                  unset($cart[$request->product_id]);
                  session()->put('cart', $cart);
              }

              session()->flash('success', 'Product removed successfully');
          }
      }else{
          $data = Basket::find($request->product_id);
          $data->delete();

          $this->render_basket($request);
          return response()->json($data);
      }

    }
    public function update_wish(Request $request){
      $data = Basket::find($request->product_id);
      if ($data->quantity < 1){//istekler -1 flan olmasın diye, 0 da olmasın isteyen siler
          $data->quantity=1;
      }else{
          $data->quantity = $data->quantity + (int)$request->is_inc;
      }
      $data->save();
      $post = json_decode($data->post->product_options);
      return response()->json(['data'=>$data,'post'=>$post]);
    }
    public function delete_wish(Request $request){
      $data = Basket::find($request->product_id);
      $data->delete();
    }
    public function add_wish(Request $request){
        $result = Basket::where('user_id',$this->user->id)->where('post_id',$request->product_id)->where('type','wish')->first();
        if ($result){
            $result->quantity = $result->quantity +1;
            $result->save();
            return response()->json($result);
        }else{
            $data = new Basket();
            $data->user_id = $this->user->id;
            $data->type = "wish";
            $data->post_id = $request->product_id;
            $data->save();
        }
        return response()->json(['data'=>$data]);
    }
    public function user_update(Request $request){
      $data = User::find($this->user->id);
      if(Hash::check($request->current_password,$data->password)){
          $data->name = $request->name;
          $data->email = $request->email;
          if($request->new_password === $request->confirm_password and $request->new_password==''){
              $data->password = Hash::make($request->new_password);
          }
          $data->save();
      }else{
          Session::put('new','aa');
          return redirect()->back();
      }
        return redirect()->back();
    }
    public function address_create(Request $request){
       $data = User::find($this->user->id);
       $json = json_encode($request->all());
       $data->bill_address = $json;
       $data->save();

       return redirect()->back();
    }

    public function create_bill_address(Request $request){
        $data = User::find($this->user->id);
        $json = json_encode($request->all());
        $data->bill_address = $json;
        $data->save();
        return  redirect()->to('/cart');;
    }

    public function guest_or_missing_data(AuthController $authController, Request $request){


        $bill_address = [
            'address_line1'=> $request->address_line1,
            'address_line2'=> $request->address_line2,
            'state'=> $request->state,
            'phone'=> $request->phone,
            'town'=> $request->town,
            'country'=> $request->country,
            'post_code' => $request->post_code,
        ];

        if($this->user){
            $this->user->bill_address = json_encode($bill_address);
            $this->user->save();
            $validator = Validator::make($request->all(), [
                'accept_terms' => 'required',
              ]);

              if ($validator->fails()) {
                $validator->getTranslator()->setLocale(App::getLocale());
                return back()->with('errors', $validator->messages()->all()[0])->withInput();
            }
            return redirect('payment/'.Carbon::now()->timestamp)->withSuccess(trans('lang.you_can_payment'));
        }else {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'phone' => 'required',
                'accept_terms' => 'required',
                'address_line1' => 'required',
                'country' => 'required',
                'post_code' => 'required',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6|confirmed',
              ]);

              if ($validator->fails()) {
                return back()->with('errors', $validator->messages()->all()[0])->withInput();
            }
             $createdUser =  User::create([
                'name' => $request->name,
                'email' => $request->email,
                'bill_address' => json_encode($bill_address),
                'address' => json_encode($bill_address),
                'email' => $request->email,
                'phone' => $request->phone,
                'email_verified_at' => Carbon::now(),
                'password' => bcrypt($request->password)
              ]);

              return redirect('login-register')->withSuccess(trans('lang.please_login_with_credentials_you_created'));


        }

        return back()->withSuccess(trans('lang.you_can_now_go_to_payment'));
    }
    

    public function checkout_update(Request $request){
        $product = Basket::find($request->product_id);
        if($product){
            if ($product->quantity <= 1 and (int)$request->quantity==-1) {//istekler -1 flan olmasın diye, 0 da olmasın isteyen siler
                $product->quantity=1;
            }else{
                $product->quantity = $product->quantity + (int)$request->quantity;
            }
            $product->save();
        }else{
            $this->add_to_basket($request);
        }

        $cart = Helper::cart();
        $product = $this->user ? Basket::find($request->product_id) : $cart[$request->product_id] ;
        $cartTotal = Helper::cartTotal();
        return response()->json(['cart'=>$cart,'product'=>$product, 'cartTotal'=>$cartTotal , 'currency'=>$this->setting['currency']->value]);
    }


public function ajaxLogout (Request $request) {
    session()->put('user',null);
    $user = session()->get('user');
    Cookie::forget('token');
    auth()->logout();
    return $user;

}





public function testMethod(Request $request){


$alert = 'Success Title';

 return $alert ;

 }











}
