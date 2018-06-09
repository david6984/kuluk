import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { AuthService } from '../services/auth.service';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() obtenerUsuarioByUserName = new EventEmitter<Usuario>();
  @Input() canAdd : boolean = true;
  @Input('selectedUsuario') usuario: Usuario = new Usuario();
  public loading:boolean =false;

  constructor(private authservice:AuthService) { }

 ngOnInit() {
  }

    login() {
        this.loading = true;
        console.log('entra al login del component')
        /*this.authservice.login(this.usuario).subscribe(data=>{
        	console.log('Entro al subscribe');
        },Error=>{
        	this.loading=false;
        });*/
        console.log(this.usuario);
        console.log('termina login en component');
    }
}
