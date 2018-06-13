import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-producto-display',
  templateUrl: './producto-display.component.html',
  styleUrls: ['./producto-display.component.css']
})
export class ProductoDisplayComponent implements OnInit {
	@Input() producto : Producto;
	@Output() borrarProducto = new EventEmitter<Producto>();
	@Output() editarProducto = new EventEmitter<Producto>();
	@Output() isEditingOut= new EventEmitter();
	public isDeleting = false;
	public isEditing = false;
	public islogged=false;


	constructor(private productosService:ProductosService, private authService:AuthService) { }

	ngOnInit() {
		this.refrescar();
	}

	refrescar(){
  		this.islogged=false;
  		if(this.authService.islogged==true){
  		this.islogged=true;
  		}
  	}

	borrar(){
		this.isDeleting = true;
		this.borrarProducto.emit(this.producto);
	}


	editar(){
		this.editarProducto.emit(this.producto);
	}

}
