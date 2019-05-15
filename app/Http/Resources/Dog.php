<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Dog extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);

        // return [
        //     'id' => $this->id,
        //     'chip' => $this->chip,
        //     'name' => $this->name,
        //     'gender' => $this->gender,
        //     'breed_id' => $this->breed_id,
        //     'color_id' => $this->color_id,
        //     'birthdate' => $this->birthdate,
        //     // 'deathdate' => $this->deathdate,
        //     'owner_dni' => $this->owner_dni,
        //     'owner_fullname' => $$this->owner_fullname,
        //     'residence' => $this->residence
        // ];
    }

    /**
     * Additional info added to que API response
     */
    // public function with($request) {
    //     return [
    //         'version' => '1.0.0',
    //         'author_url' => url('http://ocikitos.com')
    //     ];
    // }
}
