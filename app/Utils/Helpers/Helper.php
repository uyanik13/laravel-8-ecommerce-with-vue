<?php
namespace App\utils\Helpers;
use Carbon\Carbon;
use App\Models\Post;
use App\Models\User;
use App\Models\Order;
use App\Models\Basket;
use App\Models\Custom;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Expr\Isset_;

class Helper
{

  public function __construct()
  {
    $this->Helper = Helper::class;
    $this->user = Auth::user();

  }


  public static function PostImageHelper($url, $image, $path)
  {

    if (strlen($image) < 255) {
      return $image;
    }


    $extension = explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];   // .jpg .png .pdf

    $replace = substr($image, 0, strpos($image, ',') + 1);


    $imageConvert = str_replace($replace, '', $image);

    $imageConvert = str_replace(' ', '+', $imageConvert);

    $imageName = $url . '_' . time() . '.' . $extension;

    Storage::disk('public')->put('/images/' . $path . '/' . $imageName, base64_decode($imageConvert));


    $imageUrl =  env('APP_URL') .'/images/' . $path . '/' . $imageName;



    return $imageUrl;

  }

  public static function PostVideoHelper($url, $video, $path)
  {

    if (strlen($video) < 255) {
      return $video;
    }
    $extension = explode('/', explode(':', substr($video, 0, strpos($video, ';')))[1])[1];   // .jpg .png .pdf


    $replace = substr($video, 0, strpos($video, ',') + 1);


    $imageConvert = str_replace($replace, '', $video);

    $imageConvert = str_replace(' ', '+', $imageConvert);

    $imageName = $url . '_' . time() . '.' . $extension;

    Storage::disk('public')->put('/images/' . $path . '/' . $imageName, base64_decode($imageConvert));

    $imageUrl = env('APP_URL') . '/storage/app/public/images/' . $path . '/' . $imageName;


    return $imageUrl;

  }

  public static function MakeUrl($string)
  {

    //Türkçeye özgü harfleri değiştirme
    $string = str_replace('ü', 'u', $string);
    $string = str_replace('Ü', 'U', $string);

    $string = str_replace('ğ', 'g', $string);
    $string = str_replace('Ğ', 'G', $string);

    $string = str_replace('ş', 's', $string);
    $string = str_replace('Ş', 'S', $string);

    $string = str_replace('ç', 'c', $string);
    $string = str_replace('Ç', 'C', $string);

    $string = str_replace('ö', 'o', $string);
    $string = str_replace('Ö', 'O', $string);

    $string = str_replace('ı', 'i', $string);
    $string = str_replace('İ', 'I', $string);

    $slug = preg_replace('/[^A-Za-z0-9-]+/', '-', strtolower($string));


    return $slug;
  }


  public static function namedSettings($settings)
  {
    $named_settings = [];
    foreach ($settings as $setting) {
      $named_settings[$setting->name] = $setting;
    }
    return $named_settings;
  }


    public static function findProduct ($id) {
        $lawyer = Post::where('slug', $id)->firstOrFail();
        return $lawyer;
    }

    public static function findServices ($id) {
        $services = Post::where('user_id', $id)->where('type','service')->get();
        return $services;
    }
    public static function findPosts ($id) {
        $posts = Post::where('user_id', $id)->where('type','post')->get();
        return $posts;
    }

    public static function findOrders ($id) {
        $orders = Order::where('user_id',$id)->orderBy('created_at', 'desc')->get();
        return $orders;
    }
    public static function findBlog ($url) {
        $posts = Post::where('slug', $url)->where('type','post')->first();
        return $posts;
    }

    public static function findFollowers ($id) {
        $lawyer = User::where('id', $id)->firstOrFail();
        return $lawyer->followers;
    }

    // public static function findUserComments ($id) {
    //     $lawyer = User::where('id', $id)->firstOrFail();
    //     $comments =UserComment::where('to',$id)->get();
    //     return $comments;
    // }

    // public static function amIFollowingThis ($id) {
    //     $lawyer = User::where('id', $id)->firstOrFail();
    //     $isfollowing = Auth::user()->isFollowing($lawyer);
    //     return $isfollowing;
    // }

    public static function ageCalculator ($date) {
        return Carbon::parse($date)->age;;
    }
    public static function wishlist($user){
      $data = Basket::where('type','wish')->where('user_id',$user)->get();
      return $data;
    }


    public static function diffForHumans ($created_at) {
        $now = Carbon::now();
        $difference = $created_at->diff($now)->days;
        return $difference;
      }


    //CREATE ONCE A MONTH CRONJOB FOR DELETE
    // public static function SearchHistory () {
    //     $SearchHistory = UserSearch::select('key','search')->distinct()->paginate(10);
    //     return  $SearchHistory ;
    // }
    public static function total_amount_for_payment($user){
      $data= Basket::where('user_id',$user->id)->where('type','product')->where('sold',false)->get();
      $total = 0;
      foreach ($data as $item){
          if (isset($item->discounted_price)){
              $total+= $item->discounted_price*$item->quantity;
          }else{
              $total+= $item->price*$item->quantity;
          }
      }
      return $total;
    }
    public static function related_post($post_id){
      $current_post = Post::find($post_id);
       $data =  Post::where('type','post')->where('title','LIKE','%'.$current_post->title[0].'%')->where('content','like','%'.$current_post->title[0].'%')->orWhere('type','post')->limit(3)->get();
       return $data;
    }
    public static function all_posts(){
      $data = Post::where('type','post')->get();
      return $data;
    }


    public static function findCategoryPosts ($url) {
        $category = Category::Select('id')->where('slug',$url)->first();
        $catProducts = Post::where('type','product')->whereIn('category_id',$category)->paginate(12);
        return $catProducts;

    }

    public static function relatedProducts ($id) {

        $related_products = Post::where('title','LIKE','%'.strtok($id).'%')->where('type','product')
        ->orWhere('content','LIKE','%'.strtok($id).'%')->where('type','product')->limit(5)->get();

        return $related_products ;
    }

    public static function products_in_category($product){
        $data = Post::find($product->id);

    }
    public  static  function main_categories (){
        $main_categories = Category::where('parent_id','1')->get();
        return $main_categories;
    }
    public static function subCategory($category_id){
        $sub_category = Category::where('parent_id',$category_id)->get();
        return $sub_category;
    }
    public static function hasChild($category_id){
        $sub_category = Category::where('parent_id',$category_id)->get();
        return $sub_category;
    }

    public static function jsonToArray ($data) {
        $newData =  json_decode($data, true);
        return  $newData ;
      }


      public static function guestBasketControl($id,$qty){
        $qty = $qty === null ? 1 : $qty;
        $product = Post::find($id);


        $cart = session()->get('cart');
        if (!$cart){
            $price = 0;
            if(isset($product->discounted_price)){
                $price = $product->discounted_price;
            }else{
                $price = $product->price;
            }

            $cart = [
                $id => collect([
                            "id"=>$product->id,
                            "quantity" => $qty,
                            "price" => $price,
                            "post"=>$product,
                        ])
            ];
            return $cart;
        }
        if(isset($cart[$id])) {
            $cart[$id]['quantity'] = $cart[$id]['quantity'] + $qty;
            return $cart;
        }

        $price = 0;
        if(isset($product->discounted_price)){
            $price = $product->discounted_price;
        }else{
            $price = $product->price;
        }
        $cart[$id] = collect([
                        "id"=>$product->id,
                        "quantity" => $qty,
                        "price" => $price,
                        "post"=>$product,
                         ]);

        return  $cart ;
      }

      public static function userBasketControl ($user,$id,$qty) {
        $qty = $qty === null ? 1 : $qty;
        $is_exist = Basket::where('user_id',$user->id)
        ->where('post_id',$id)
        ->where('sold',false)->where('type','product')->first();
        if($is_exist){
            $is_exist->quantity = $is_exist->quantity + $qty;
            $is_exist->save();
            return $is_exist;
        }else {
            $data = new Basket();
            $data->user_id = $user->id;
            $data->post_id = $id;
            $data->save();
            return $data;
      }
    }


    public static function findCustomData ($type) {

        $data = Custom::where('type', $type)->first();

        return $data ;
    }




    public static function cart() {
        $user = Auth::user();
        $cart = '';
        if($user){
            $sessionCart = session()->get('cart');
            $dbCart = Basket::where('user_id',$user->id)
            ->where('sold',false)->where('type','product')->get();
            $cart = $dbCart ? $dbCart : $sessionCart;
        }else{
            $cart = session()->get('cart');
        }

        return $cart;
    }

    public static function cartTotal() {

        $user = Auth::user();
        $totalAmount = 0;
        $price = 0;
        if($user){
            $cart = Basket::where('user_id',$user->id)->where('sold',false)->where('type','product')->get();
            if($cart){
                foreach ($cart as $key => $product) {
                    if(isset($product->post->discounted_price)){
                        $price = $product->post->discounted_price;
                    }else{
                        $price = $product->post->price;
                    }
                    $totalAmount += $price * $product['quantity'];
                }
            }

        }else{
            $cart = session()->get('cart');
           if($cart){
            foreach ($cart as $key => $product) {
                if(isset($product['post']->discounted_price)){
                    $price = $product['post']->discounted_price;
                }else{
                    $price = $product['post']->price;
                }
                $totalAmount += $price * $product['quantity'];
            }
           }
        }


        return $totalAmount;
    }



    public static function toEmptyCart() {
        $user = Auth::user();
        $cart = '';
        if($user){
            $cart = Basket::where('user_id',$user->id)->where('sold',false)->where('type','product')->get();
            foreach ($cart as $key => $item) {
                $item->sold = true;
                $item->save();
            }
        }else{
            $cart = session()->remove('cart');
        }

        return $cart;
    }



}










