import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public usuarios : Usuario[];
  @Input() canAdd : boolean = true;
  @Input('selectedUsuario') usuario: Usuario = new Usuario();
  public loading:boolean =false;

  constructor(private usuariosService:UsuariosService) { }

 ngOnInit() {
  }

    login() {
        this.loading = true;
        console.log('entra al login del component')
        this.usuariosService.obtenerUsuarioByUserName(this.usuario).subscribe((data)=>{
        	this.usuarios=data.user;
        	console.log(data.user);
        },(error)=>{
        	console.log('error',error);
        });
        this.loading=false;
        console.log(this.usuario);
        console.log(this.usuarios);
        console.log('termina login en component');
    }
}
