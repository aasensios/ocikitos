<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->integer('breed_id')->unsigned()->nullable();
            $table->integer('color_id')->unsigned();
            $table->date('birthdate');
            $table->date('deathdate')->nullable();
            $table->string('owner_dni');
            $table->string('owner_fullname');
            $table->text('residence')->nullable();

            // created_at and updated_at
            $table->timestamps();

            // Foreign keys
            $table->foreign('breed_id')->references('id')->on('breeds')->nullable();
            $table->foreign('color_id')->references('id')->on('colors')->nullable();
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
