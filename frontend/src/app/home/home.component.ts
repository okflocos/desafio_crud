import { Component, OnInit } from '@angular/core'
import { UsuarioService } from '../services/usuario.service'
import { Usuario } from '../models/usuario'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.usuarioService.getAll().subscribe((data) => {
      this.usuarios = data
    }, (err) => {
      console.log(err)
    });
  }

  delete(id: number){
    if(confirm('Tem certeza que deseja apagar o usuário id ' + id + '?')) {
      this.usuarioService.delete(id).subscribe(() => {
        alert('Apagado!')
        this.getAll()
      }, (err) => {
        console.log(err)
      })
    }
  }
}
