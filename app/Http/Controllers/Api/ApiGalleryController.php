<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Models\Gallery;
use http\Exception;
use Illuminate\Http\Request;


class ApiGalleryController extends ApiController
{
  /**
   * Display a listing of the resource.
   *
   * @return array
   */
  public function index()
  {
    $settings = Gallery::all();
    return $settings->toArray();

  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function store(Request $request)
  {
    $user = auth()->setRequest($request)->user();
    // Get user from $request token.
    if (!$user->role == 'admin') {
      return $this->responseUnauthorized();
    }


    if (is_array($request->all())) {
      foreach ($request->file('files') as  $image) {
        $FileFullName = $image->getClientOriginalName();
        $FileNameForSaving = time().'-'.$FileFullName;
        $FileName = explode('.',$FileFullName)[0];
        $type = $image->extension();
        $slug = '/images/file-manager/'.$FileNameForSaving;
        $image->move('images/file-manager', $FileNameForSaving);
        $Gallery = Gallery::firstOrCreate([
          'user_id' => $user->id,
          'file_name' => $FileName,
          'slug' => $slug,
          'type' => $type,
        ]);
        $Gallery->save();
      }

      return response()->json([
        'status' => 201,
        'message' => 'File Uploaded',
      ], 201);

    }
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Gallery $gallery
   * @return \Illuminate\Http\Response
   */
  public function show(Gallery $gallery)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Gallery $gallery
   * @return \Illuminate\Http\Response
   */
  public function edit(Gallery $gallery)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Gallery $gallery
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Gallery $gallery)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Gallery $gallery
   * @return \Illuminate\Http\JsonResponse
   */
  public function destroy(Request $request, $id)
  {
    $user = auth()->setRequest($request)->user();
    // Get user from $request token.
    if (!$user->role === 'admin') {
      return $this->responseUnauthorized();
    }
    $gallery = Gallery::where('id', $id)->firstOrFail();

    try {

      if(file_exists(public_path($gallery->slug))){
        unlink(public_path($gallery->slug));
        $gallery->delete();
      }else{

        return $this->responseServerError('File Doesnt Exist.');

      }
      return $this->responseResourceDeleted();
    } catch (Exception $e) {
      return $this->responseServerError('Error deleting resource.');
    }
  }
}
