<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
	protected $fillable = [
        "id",
        "nome",
        "sexo",
        "data_nascimento"
    ];
}
