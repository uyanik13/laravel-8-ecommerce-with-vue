<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('posts', function (Blueprint $table) {
      $table->increments('id');
      $table->foreignUuid('user_id');
      $table->unsignedSmallInteger('category_id')->nullable();
      $table->string('title');
      $table->longText('content');
      $table->text('options')->nullable();
      $table->float('price')->nullable();
      $table->float('discounted_price')->nullable();
      $table->integer('quantity')->nullable();
      $table->enum('currency', ['EURO', 'USD', 'GBP','TRY'])->default('USD');
      $table->string('slug')->nullable();
      $table->string('seo_title')->nullable();
      $table->string('seo_description')->nullable();
      $table->enum('type', ['post', 'page', 'product'])->default('post');
      $table->boolean('status');
      $table->string('thumbnail')->nullable();
      $table->timestamps();

    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('posts');
  }
}
