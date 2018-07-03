import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Slider} from '../../models/slider';
import {SliderService} from '../../services/slider.service';

@Component({
  selector: 'app-slider-display',
  templateUrl: './slider-display.component.html',
  styleUrls: ['./slider-display.component.css']
})
export class SliderDisplayComponent implements OnInit {
	@Input() slider : Slider;
	@Output() borrarSlider = new EventEmitter<Slider>();
	@Output() editarSlider = new EventEmitter<Slider>();
	public isDeleting = false;

	constructor(private sliderService:SliderService) { }

	ngOnInit() {
		
	}

	borrar(){
		this.isDeleting = true;
		this.borrarSlider.emit(this.slider);
	}


	editar(){
		this.editarSlider.emit(this.slider);
	}

}
