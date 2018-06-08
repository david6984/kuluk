import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Lugar } from '../../models/lugar';
import { LugaresService } from '../../services/lugares.service';
 

@Component({
  selector: 'app-lugares-agregar',
  templateUrl: './lugares-agregar.component.html',
  styleUrls: ['./lugares-agregar.component.css']
})
export class LugaresAgregarComponent implements OnInit,OnChanges {

  	@Output() agregarLugar = new EventEmitter<any>();
	@Output() editarLugar = new EventEmitter<any>();
	@Input() canAdd : boolean = true;
	@Input('selectedPlace') lugar : Lugar = new Lugar();
	submitted = false;
	requiredText : string = '';
	isEditing = false;

	onSubmit(lugarForm) {
		if(this.isEditing){
			this.editarLugar.emit({
				'lugar':this.lugar,
				'form':lugarForm
			});
			this.isEditing = false;
		} else {
			this.agregarLugar.emit({
				'lugar':this.lugar,
				'form':lugarForm
			});
		}
		this.submitted = true; 

	}

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.lugar && changes.lugar.currentValue._id){
			console.log('is editing');
			this.isEditing = true;
		}
	}

	newLugar(){
		this.submitted = false; 
		this.isEditing = false;
		this.lugar = new Lugar();
	}

}
