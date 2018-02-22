import { Component, OnInit } from '@angular/core';
import { Lugar } from '../models/lugar';
import { LugaresService } from '../services/lugares.service';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

 	public lugares : Lugar[];
	public selectedPlace : Lugar= new Lugar;
	public loading : boolean = false;
	constructor(private lugaresService: LugaresService) { }

	ngOnInit() {
		this.obtenerLugares();
	}

	public editarLugar(lugar){
		console.log('edit',lugar);
		this.selectedPlace = Object.assign({}, lugar);
	}

	public editarLugarSave(lugar){
		this.lugaresService.editarLugar(lugar.lugar)
			.then(data => {
				this.obtenerLugares();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public borrarLugar(lugar){
		this.lugaresService.borrarLugar(lugar)
			.then(data => {
				this.obtenerLugares();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public obtenerLugares(){
		this.lugaresService.obtenerLugares().subscribe((data) => {
				this.lugares = data.lugar;
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

	public agregarLugar(lugar:any){
		this.loading = true;
		this.lugaresService.agregarLugar(lugar.lugar)
			.then(data => {
				console.log('lugar agregado');
				lugar.form.reset();
				this.loading = false;
				this.obtenerLugares();
			})
			.catch(error => {
				console.log('error',error);
			});
	}
}