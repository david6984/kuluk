import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { DataService } from '../services/data.service';

@Injectable()
export class ProductosService {
	
	constructor(private dataService:DataService) { }

	public obtenerProductos(){
		return this.dataService.get('/api/products');
	}

	public agregarProducto(producto:Producto){
		return this.dataService.post('/api/products',{'product':producto});
	}

	public borrarProducto(producto:Producto){
		try{
			console.log('prod service',producto._id);
			console.log('prod service',producto);
			return this.dataService.delete('/api/products/'+producto._id);
		}catch(e){
			console.log(e);
		}
	}

	public editarProducto(producto:Producto){
		return this.dataService.put('/api/products/'+producto._id,{'product':producto});
	}
}
