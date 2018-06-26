import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-productos',
	templateUrl: './productos.component.html',
	styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
	public productos : Producto[];
	public selectedProduct : Producto = new Producto;
	public loading : boolean = false;
	public islogged : boolean = false;

	constructor(private productosService: ProductosService, private authService:AuthService) { }

	ngOnInit() {
		this.obtenerProductos();
		this.refrescar();
	}

	refrescar(){
  		this.islogged=false;
  		if(this.authService.islogged==true){
  			this.islogged=true;
  		}
  	}

	public editarProducto(producto){
		console.log('edit',producto);
		this.selectedProduct = Object.assign({}, producto);
	}

	public editarProductoSave(producto){
		try{
			this.productosService.editarProducto(producto.producto)
			.then(data => {
				this.obtenerProductos();
				producto.form.reset();
			})
			.catch(error => {
				console.log('error catch update prod',error);
			});
		}catch(e){
			console.log('error update',e);
		}

	}

	public borrarProducto(producto){
		this.productosService.borrarProducto(producto)
			.then(data => {
				this.obtenerProductos();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public obtenerProductos(){
		this.productosService.obtenerProductos().subscribe((data) => {
				this.productos = data.product;
			},(error)=>{
				console.log('error',error);
			});
			// .then(data => {
			// 	this.productos = data.product;
			// })
			// .catch(error => {
			// 	console.log('error',error);
			// });
	}

	public agregarProducto(producto:any){
		this.loading = true;
		this.productosService.agregarProducto(producto.producto)
			.then(data => {
				console.log('producto agregado');
				producto.form.reset();
				this.loading = false;
				this.obtenerProductos();
			})
			.catch(error => {
				console.log('error',error);
			});
	}


}
