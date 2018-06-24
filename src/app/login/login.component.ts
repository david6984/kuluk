import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DatasharingService } from '../services/datasharing.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public usuarios : Usuario[];
  @Input() canAdd : boolean = true;
  @Input('selectedUsuario') usuario: Usuario = new Usuario();
  userprueba:Usuario=new Usuario();
  public loading:boolean =false;

  constructor(private usuariosService:UsuariosService, private authService:AuthService, private router:Router, private dataSharing:DatasharingService) { }

 ngOnInit() {
   this.loading=false;
   this.logout();
  }

    login() {
        this.loading = true;
        this.usuariosService.obtenerUsuarios().subscribe((data)=>{
        	this.usuarios=data.user;
        	for(let i=0;i<this.usuarios.length;i++){
        		this.userprueba=this.usuarios[i];
        		if(this.userprueba.usuario.toUpperCase()===this.usuario.usuario.toUpperCase()&&this.userprueba.passw===this.usuario.passw){
        			console.log('el usuario logeo correctamente');
        			this.usuariosService.usuarioLogin();
              this.authService.loadToken();
              this.authService.loguser(this.usuario);
              this.dataSharing.isUserLoggedIn.next(true);
              this.router.navigate(['/Home']);
              break;
        		}else{
        			console.log('usuario invalido');
              this.dataSharing.isUserLoggedIn.next(false);
        			this.loading=false;
        		}
        	}
        },(error)=>{
        	this.loading=false;
          this.dataSharing.isUserLoggedIn.next(false);
        	console.log('error',error);
        });
    }

    logout(){
      console.log('logout');
      this.authService.logout();
      this.dataSharing.isUserLoggedIn.next(false);
    }
}
