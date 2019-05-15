<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Carbon\Carbon;

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
            $table->increments('id');
            $table->string('chip')->unique();
            $table->string('name');
            $table->string('gender');
            $table->integer('breed_id');
            $table->integer('color_id');
            $table->datetime('birthdate');
            // $table->datetime('deathdate')->nullable();
            $table->string('owner_dni');
            $table->string('owner_fullname');
            $table->string('residence');
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
        Schema::dropIfExists('dogs');
    }
}
