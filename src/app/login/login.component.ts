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
  @Output() obtenerUsuarioByUserName = new EventEmitter<Usuario>();
  @Input() canAdd : boolean = true;
  @Input('selectedUsuario') usuario: Usuario = new Usuario();
  public loading:boolean =false;

  constructor(private authservice:AuthService) { }

 ngOnInit() {
    this.login();
  }

    login() {
        this.loading = true;
        this.loading = true;
        (Usuario)
            .subscribe(
                data => {
                    //this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                });

    }
}
