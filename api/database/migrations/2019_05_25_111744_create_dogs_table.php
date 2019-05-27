<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dogs', function (Blueprint $table) {
            // Primary key
            $table->bigIncrements('id');

            // Fillable fields
            $table->string('chip')->unique();
            $table->string('name');
            $table->enum('gender', ['male', 'female']);
            $table->bigInteger('breed_id')->unsigned()->nullable();
            $table->bigInteger('color_id')->unsigned()->nullable();
            $table->date('birthdate');
            $table->date('deathdate')->nullable();
            $table->string('owner_dni');
            $table->string('owner_fullname');
            $table->text('residence')->nullable();
            $table->bigInteger('veterinarian_id')->unsigned()->nullable();

            // created_at and updated_at
            $table->timestamps();

            // Foreign keys
            $table->foreign('breed_id')->references('id')->on('breeds');
            $table->foreign('color_id')->references('id')->on('colors');
            $table->foreign('veterinarian_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dogs');
    }
}
