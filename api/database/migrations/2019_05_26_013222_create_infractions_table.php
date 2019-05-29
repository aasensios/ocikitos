<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInfractionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('infractions', function (Blueprint $table) {
            // Primary key
            $table->bigIncrements('id');

            // Fillable fields
            $table->enum('status', ['pending', 'approved', 'rejected']);
            $table->string('document')->nullable();
            $table->bigInteger('incident_id')->unsigned();
            $table->bigInteger('officer_user_id')->unsigned()->nullable();

            // created_at and updated_at
            $table->timestamps();

            // Foreign keys
            $table->foreign('incident_id')->references('id')->on('incidents');
            $table->foreign('officer_user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('infractions');
    }
}
