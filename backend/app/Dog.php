<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dog extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'chip',
        'name',
        'gender',
        'breed_id',
        'color_id',
        'birthdate',
        'deathdate',
        'owner_dni',
        'owner_fullname',
        'residence',
    ];

}
