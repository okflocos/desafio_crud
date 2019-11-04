<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/usuario', 'UsuarioController@index')->name('usuario.getAll');
Route::get('/usuario/{id}', 'UsuarioController@show')->name('usuario.get');
Route::post('/usuario', 'UsuarioController@create')->name('usuario.create');
Route::put('/usuario/{id}', 'UsuarioController@edit')->name('usuario.edit');
Route::delete('/usuario/{id}', 'UsuarioController@destroy')->name('usuario.remove');
