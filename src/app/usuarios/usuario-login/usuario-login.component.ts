import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
	@Input() usuario : Usuario;
	@Output() obtenerUsuarioByUserName = new EventEmitter<Usuario>();

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit() {

  }

  	obtener(){
		this.obtenerUsuarioByUserName.emit(this.usuario);
	}

}
