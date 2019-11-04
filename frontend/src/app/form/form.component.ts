import { Component, OnInit } from '@angular/core'
import { UsuarioService } from '../services/usuario.service'
import { Usuario } from '../models/usuario'
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  usuario: Usuario
  isEdition: boolean = false
  id: number

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {    
    this.id = this.route.snapshot.params['id']

    if(this.id){      
      this.usuarioService.get(this.id).subscribe((data) => {
        this.usuario = data
        
        if(this.usuario){
          this.isEdition = true
        } else {
          this.isEdition = false
        }
      }, (err) => {
        console.log(err)
        this.isEdition = false
      })
    } else {
      this.usuario = new Usuario()
    } 
  }

  save(){
    console.log(this.usuario)
    if(this.isEdition){
      this.usuarioService.update(this.usuario).subscribe((data) => {
        if(data.id){
          this.router.navigate(['/home']);
        } else {
          alert('Usuário não editado')
          return false
        }        
      }, (err) => {
        console.log(err) 
        return false
      })
    } else {
      this.usuarioService.save(this.usuario).subscribe((data) => {
        if(data.id){
          this.router.navigate(['/home']);
        } else {
          alert('Usuário não criado')
          return false
        }        
      }, (err) => {
        console.log(err)
        return false
      })
    }
  }
}
