<?php

namespace App\Http\Controllers;

use App\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $usuario = new Usuario();
        $usuario->fill($request->all());
        $usuario->save();
        return response()->json($usuario, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
       $usuario = Usuario::find($id);

        if(!$usuario) {
            return response()->json([
                'message'   => 'Usuario nao encontrado',
            ], 404);
        }

        return response()->json($usuario);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, int $id)
    {
       $usuario = Usuario::find($id);

        if(!$usuario) {
            return response()->json([
                'message'   => 'Usuario nao encontrado',
            ], 404);
        }

        $usuario->fill($request->all());
        $usuario->save();

        return response()->json($usuario);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $usuario = Usuario::find($id);

        if(!$usuario) {
            return response()->json([
                'message'   => 'Usuario nao encontrado',
            ], 404);
        }

        $usuario->delete();

        return response()->json('Removido!', 200);
    }
}
