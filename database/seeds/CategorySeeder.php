<?php

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories =
            [
                [
                    'id' => 1,
                    'title' => 'product',
                    'slug' => 'product',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => null,
                ],
                [
                    'id' => 2,
                    'title' => 'post',
                    'slug' => 'nuts-and-seeds',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => null,
                ],
                [
                    'id' => 3,
                    'title' => 'DRIED FRUITS',
                    'slug' => 'dried-fruits',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 1,
                ],
                [
                    'id' => 4,
                    'title' => 'HERBS&SPICES',
                    'slug' => 'herb-and-spices',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 1,
                ],
                [
                    'id' => 5,
                    'title' => 'WHOLEFOODS & LEGUMES',
                    'slug' => 'nuts-and-seeds',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 1,
                ],
                [
                    'id' => 6,
                    'title' => 'NUTS',
                    'slug' => 'nuts',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 3,
                ],
                [
                    'id' => 7,
                    'title' => 'TEAS',
                    'slug' => 'teas',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 1,
                ],
                [
                    'id' => 8,
                    'title' => 'Raw Almonds',
                    'slug' => 'raw-almonds',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 5,
                ],
                [
                    'id' => 9,
                    'title' => 'Roasted Almonds',
                    'slug' => 'roasted-almonds',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 5,
                ],
                [
                    'id' => 10,
                    'title' => 'Walnut',
                    'slug' => 'walnut',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 5,
                ],
                [
                    'id' => 11,
                    'title' => 'Pumpkin Seeds',
                    'slug' => 'pumpkin-seeds',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 6,
                ],
                [
                    'id' => 12,
                    'title' => 'Sunflower Seeds',
                    'slug' => 'sunflower-seeds',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 6,
                ],
                [
                    'id' => 13,
                    'title' => 'Fruit Tea',
                    'slug' => 'fruit-tea',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 7,
                ],
                [
                    'id' => 14,
                    'title' => 'Yellow Apricot',
                    'slug' => 'yellow-apricot',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 2,
                ],
                [
                    'id' => 15,
                    'title' => 'Natural Brown Apricot',
                    'slug' => 'natural-brown-apricot',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 2,
                ],
                [
                    'id' => 16,
                    'title' => 'Herbs',
                    'slug' => 'herbs',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 3,
                ],
                [
                    'id' => 17,
                    'title' => 'Spices',
                    'slug' => 'spices',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 3,
                ],
                [
                    'id' => 18,
                    'title' => 'Cinnamon Powder',
                    'slug' => 'cinnamon-powder',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 16,
                ],
                [
                    'id' => 19,
                    'title' => 'Cinnamon Sticks',
                    'slug' => 'cinnamon-sticks',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 16,
                ],
                [
                    'id' => 20,
                    'title' => 'Paprika',
                    'slug' => 'paprika',
                    'seo_title' => 'Register Seo Title',
                    'seo_description' => 'Register Seo Description',
                    'parent_id' => 17,
                ],

            ];


        Category::insert($categories);
        //Category::factory(1)->create();
    }
}
