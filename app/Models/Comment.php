<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['content', 'approved','user_id','post_id','point'];
//    protected $with = ['post'];
    //simdi test et

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function post()
    {
        return $this->belongsTo('App\Models\Post');
    }

    public function specificResourcePath()
    {
        return '/comments/' . $this->id;
    }
}
