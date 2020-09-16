<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Str;

use App\QueryFilters\Post\ {
    Category as CategoryFilter,
    Order as OrderFilter
};

class Post extends Model
{
    use HasFactory,Sluggable;

    protected $guarded = [];
    protected $with = ['user', 'category','vote','comments'];
    protected $hidden = [];



    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function deleteImageFile()
    {
        $storage = env('APP_ENV') === 'testing' ? 'test' : 'public';

        if ($exists = Storage::disk($storage)->exists($this->image)) {
            return Storage::disk($storage)->delete($this->image);
        }

        return false;
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }



    public function userVotes()
    {
        return $this->hasMany('App\Models\Vote');
    }

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }

    public function comments()
    {
        return $this->hasMany('App\Models\Comment')->orderBy('created_at','DESC');
    }
    public function baskets()
    {
        return $this->hasMany('App\Models\Baskets')->orderBy('created_at','DESC');
    }

    public function contracts()
    {
      return $this->hasMany('App\Models\Contract');
    }

    public function vote()
    {
        return $this->hasMany('App\Models\Vote');
    }
    public function orders()
  {
    return $this->hasMany('App\Models\Order');
  }

    public static function recentPosts(int $amount)
    {
        return self::where('status', 1)
            ->orderBy('created_at', 'desc')
            ->limit($amount)
            ->get();
    }

    public static function mostPopular(int $amount)
    {
        return self::where('status', 1)
            ->orderBy('votes', 'desc')
            ->limit($amount)
            ->get();
    }

    public static function getFilteredPosts(array $data = [])
    {
        $validData = Post::validateFilterData($data);

        return app(Pipeline::class)
            ->send([
                'query' => Post::query(),
                'filters' => $validData
            ])
            ->through([
                CategoryFilter::class,
                OrderFilter::class
            ])
            ->thenReturn()['query'];
    }

    public static function validateFilterData(array $data)
    {
        $validData = [];

        if ($data['categories'] ?? false) {

            foreach($data['categories'] as $categoryId) {

                if (is_numeric($categoryId)) {
                    $validData['categories'][] = $categoryId;
                }

            }
        }

        if ($data['order'] ?? null) {

            if (in_array($data['order']['by'], self::allowedFieldsForOrder())) {
                $validData['order']['by'] = $data['order']['by'];
            } else {
                return $validData;
            }

            if (in_array($data['order']['type'], ['desc', 'asc'])) {
                $validData['order']['type'] = $data['order']['type'];
            } else {
                 $validData['order']['type'] = 'desc';
            }

        }

        return $validData;
    }

    private static function allowedFieldsForOrder()
    {
        return ['votes', 'created_at', 'user_id'];
    }

    /**
     * Get the user's full name.
     *
     * @return string
     */
    public function getDateAttribute()
    {
        return substr($this->created_at, 0, 10);
    }


}
