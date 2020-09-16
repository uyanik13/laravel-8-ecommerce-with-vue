<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title','slug','seo_title','seo_description'];

    public function specificResourcePath()
    {
        return 'admin/categories/' . $this->id;
    }

    public function posts()
    {
        return $this->hasMany('App\Models\Post');
    }
}
