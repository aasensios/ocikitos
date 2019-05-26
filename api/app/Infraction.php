<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Infraction extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'status',
        'document',
        'incident_id',
    ];
}
