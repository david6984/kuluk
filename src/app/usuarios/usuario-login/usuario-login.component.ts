import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
	@Output() obtenerUsuarioByUserName = new EventEmitter<Usuario>();
  @Input() canAdd : boolean = true;
  @Input('selectedUsuario') usuario: Usuario = new Usuario();
  public isloading:boolean =false;


  constructor(private usuariosService:UsuariosService) { }

  ngOnInit() {
  }

  newUsuario(){
    this.isloading=false;
    console.log('entro al crear nuevo usuaro');
  }
}
