import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Slider} from '../../models/slider';
import {SliderService} from '../../services/slider.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-slider-display',
  templateUrl: './slider-display.component.html',
  styleUrls: ['./slider-display.component.css']
})
export class SliderDisplayComponent implements OnInit {
	@Input() slider : Slider;
	@Output() borrarSlider = new EventEmitter<Slider>();
	@Output() editarSlider = new EventEmitter<Slider>();
	@Output() isEditingOut= new EventEmitter();
	public isDeleting = false;
	public isEditing = false;
	public islogged=false;

	constructor(private sliderService:SliderService, private authService:AuthService) { }

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
		this.borrarSlider.emit(this.slider);
	}


	editar(){
		console.log('s/cd/editar:',this.slider);
		this.editarSlider.emit(this.slider);
	}

}
