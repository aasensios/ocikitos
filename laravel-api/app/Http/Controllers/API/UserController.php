<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;

class UserController extends Controller
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',

            // 'password' => 'required',
            // 'c_password' => 'required|same:password',

            'password' => 'required|confirmed', // <input name="password_confirmation">
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'data' => 'Validation Error.',
                'message' => $validator->errors(),
            ];
            return response()->json($response, 404);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('MyApp')->accessToken;
        $success['name'] = $user->name;

        $response = [
            'success' => true,
            'data' => $success,
            'message' => 'User registered successfully.',
        ];

        return response()->json($response, 200);
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;

            return response()->json(['success' => $success], 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        $data = $users->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'Users retrieved successfully.',
        ];

        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  string  $email
     * @return \Illuminate\Http\Response
     */
    public function show(string $email)
    {
        $user = DB::table('users')->where('email', $email)->first();

        dd($user);

        if (is_null($user)) {
            $response = [
                'success' => false,
                'data' => 'Empty',
                'message' => 'User not found.',
            ];
            return response()->json($response, 404);
        }

        $data = $user->toArray();

        $response = [
            'success' => true,
            'data' => $data,
            'message' => 'User retrieved successfully.',
        ];

        return response()->json($response, 200);
    }
}
