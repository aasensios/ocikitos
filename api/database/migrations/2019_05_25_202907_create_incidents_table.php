<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIncidentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('incidents', function (Blueprint $table) {
            // Primary key
            $table->bigIncrements('id');

            // Fillable fields
            $table->string('photo');
            $table->string('location');
            $table->string('sample_barcode');

            // created_at and updated_at
            $table->timestamps();

            // Foreign keys
            $table->foreign('sample_barcode')->references('barcode')->on('samples');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('incidents');
    }
}
