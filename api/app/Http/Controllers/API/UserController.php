<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Validator;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();

        return $this->sendResponse($users->toArray(), 'Users retrieved successfully.');
    }

    /**
     * Register a user.
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required',
            'role' => [
                'required',
                Rule::in(DB::table('roles')->pluck('name')),
            ],
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        // Encrypt the password and create the user.
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        // Attach the role to the user.
        $user
            ->roles()
            ->attach(Role::where('name', $input['role'])->first());

        // Create a token for the new registered user.
        $success['token'] = $user->createToken('MyOcikitosApp')->accessToken;
        $success['name'] = $user->name;

        return $this->sendResponse($success, 'User registered successfully.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * --> This is the register() method in RegisterController,
     * --> which is not protected by authentication.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function store(Request $request)
    // {
    //     $input = $request->all();

    //     $validator = Validator::make($input, [
    //         'name' => 'required',
    //         'email' => 'required|unique:users',
    //         'password' => 'required|confirmed',
    //         'password_confirm' => 'required',
    //     ]);

    //     if ($validator->fails()) {
    //         return $this->sendError('Validation Error.', $validator->errors());
    //     }

    //     $user = User::create($input);

    //     return $this->sendResponse($user->toArray(), 'User added successfully.');
    // }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $user = User::find($id);

        if (is_null($user)) {
            return $this->sendError('User not found.');
        }

        $user['role'] = $this->getRoleName($user);

        return $this->sendResponse($user->toArray(), 'User retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            //
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        // if ($request->has('barcode')) {
        //     $user->barcode = $input['barcode'];
        // }
        // if ($request->has('origin')) {
        //     $user->origin = $input['origin'];
        // }
        // if ($request->has('sequence')) {
        //     $user->sequence = $input['sequence'];
        // }
        // if ($request->has('pattern')) {
        //     $user->pattern = $input['pattern'];
        // }
        // if ($request->has('dog_id')) {
        //     $user->dog_id = $input['dog_id'];
        // }

        $user->save();

        return $this->sendResponse($user->toArray(), 'User updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return $this->sendResponse($user->toArray(), 'User deleted successfully.');
    }

    /**
     * Log out the specified user.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function logout($id)
    {
        $user = User::find($id);

        $userTokens = $user->tokens;

        foreach($userTokens as $token) {
            $token->revoke();   
        }

        return $this->sendResponse($user->toArray(), 'User logged out successfully.');
    }

    /*
    |--------------------------------------------------------------------------
    | Auxiliar metods
    |--------------------------------------------------------------------------
    |
     */

    /**
     * Get the role name of a given user.
     *
     * @param  App\User  $user
     * @return string
     */
    private function getRoleName(User $user)
    {
        $role_id = DB::table('role_user')->where('user_id', $user->id)->value('role_id');

        return Role::where('id', $role_id)->first()->name;
    }
}
