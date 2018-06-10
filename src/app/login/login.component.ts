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
	public lstuser: any[];
  @Input() canAdd : boolean = true;
  @Input('selectedUsuario') usuario: Usuario = new Usuario();
  userprueba:Usuario=new Usuario();
  public loading:boolean =false;

  constructor(private usuariosService:UsuariosService) { }

 ngOnInit() {
  }

    login() {
        this.loading = true;
        console.log('entra al login del component')
        this.usuariosService.obtenerUsuarios().subscribe((data)=>{
        	this.usuarios=data.user;
        	for(let i=0;i<this.usuarios.length;i++){
        		console.log('entro al for');
        		this.userprueba=this.usuarios[i];
        		if(this.userprueba.usuario===this.usuario.usuario&&this.userprueba.passw===this.usuario.passw){
        			console.log('el usuario logeo correctamente');
        		}
        	}
        },(error)=>{
        	console.log('error',error);
        });
        this.loading=false;
        console.log('termina login en component');
    }
}
