import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
	@Input('selectedUsuario') usuario: Usuario = new Usuario();
	@Output() obtenerUsuarioByUserName = new EventEmitter<Usuario>();
  public isloading:boolean =false;


  constructor(private usuariosService:UsuariosService) { }

  ngOnInit() {
  }

  newUsuario(){
    this.isloading=false;
    console.log(this.isloading);
  }
}
