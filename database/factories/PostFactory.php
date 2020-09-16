<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'content' => $this->faker->sentence(10),
            'user_id' => User::all()->random(),
            'category_id' => 1,
            'seo_title' => $this->faker->sentence(4),
            'seo_description' => $this->faker->sentence(6),
            'slug'=> 'product-'.rand(1,100),
            'options' => '{"gallery":[{"name":"image1","url":"https:\/\/productimages.hepsiburada.net\/s\/30\/550\/10281983541298.jpg\/format:webp"},{"name":"image2","url":"https:\/\/productimages.hepsiburada.net\/s\/30\/550\/10281983672370.jpg\/format:webp"}],"features":[{"key":"3D Deste\u011fi","value":"var"},{"key":"A\u011f\u0131rl\u0131k","value":"4,74 kg"},{"key":"\u00c7\u00f6z\u00fcn\u00fcrl\u00fck (max)","value":"1920 x 1080"}]}',
            'price'=>rand(0, 500),
            'discounted_price'=>rand(0,400),
            'quantity'=>rand(0,500),
            'type' => 'product',
            'status' => rand(0, 1),
            'thumbnail' => 'https://via.placeholder.com/500.png',
            'created_at' => $this->faker->dateTime($max = 'now', $timezone = null)
        ];
    }
}
