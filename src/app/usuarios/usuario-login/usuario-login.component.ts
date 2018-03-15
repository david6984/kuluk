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

  	obtener(e){
      console.log("prueba");
      console.log(e);
      e.preventDefault();
      var user = e.target.elements[0].value;
      console.log(user);
      var that=this;
      this.usuariosService.obtenerUsuarioByUserName(that.usuario).subscribe((data)=>{
      console.log('data',data);
      alert('El usuario logeo correctamente');
      });
  }

}
