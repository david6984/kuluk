import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Lugar } from '../../models/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-lugares-display',
  templateUrl: './lugares-display.component.html',
  styleUrls: ['./lugares-display.component.css']
})
export class LugaresDisplayComponent implements OnInit {

  	@Input() lugar : Lugar;
	@Output() borrarLugar = new EventEmitter<Lugar>();
	@Output() editarLugar = new EventEmitter<Lugar>();
	@Output() isEditingOut= new EventEmitter();
	public isDeleting = false;
	public isEditing = false;

	constructor(private lugaresService:LugaresService) { }

	ngOnInit() {
		
	}

	borrar(){
		this.isDeleting = true;
		this.borrarLugar.emit(this.lugar);
		console.log(this.lugar);
	}


	editar(){
		this.editarLugar.emit(this.lugar);
	}

}