<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStrsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('strs', function (Blueprint $table) {
            $table->string('locus')->unique();
            $table->integer('chromosome');
            $table->integer('start_coordenate');
            $table->integer('end_coordenate');
            $table->string('repeat_motif');
            $table->integer('min_size');
            $table->integer('max_size');
            $table->integer('min_repeats');
            $table->integer('max_repeats');
            $table->integer('annealing_temp');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('strs');
    }
}
