import { Component, OnInit } from '@angular/core';
import { Slider } from '../models/slider';
import { SliderService } from '../services/slider.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	public sliders : Slider[];
	public selectedSlider : Slider = new Slider;
	public loading : boolean = false;
	public islogged : boolean = false;

	constructor(private sliderService:SliderService, private authService:AuthService) { }

	ngOnInit() {
		this.obtenerSliders();
		this.refrescar();
	}

	public editarSlider(slider){
		console.log('edit',slider);
		this.selectedSlider = Object.assign({}, slider);
	}

	public editarSliderSave(slider){
		this.sliderService.editarSlider(slider._id)
			.then(data => {
				slider.form.reset();
				this.obtenerSliders();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public borrarSlider(slider){
		this.sliderService.borrarSlider(slider)
			.then(data => {
				this.obtenerSliders();
			})
			.catch(error => {
				console.log('error',error);
			});
	}

	public obtenerSliders(){
		this.sliderService.obtenerSliders().subscribe((data) => {
				console.log('data',data);
				this.sliders = data.slide;
			});
	}


	public agregarSlider(slider:any){
		this.loading = true;
		delete slider.slider._id;
		console.log('slider/c/:',slider.slider);
		this.sliderService.agregarSlider(slider.slider)
			.then(data => {
				console.log('slider agregado');
				slider.form.reset();
				this.loading = false;
				this.obtenerSliders();
			})
			.catch(error => {
				console.log('error',error);
				this.loading = false;
				alert('El slider seleccionado ya existe, por favor seleccione otro');
			});
	}

	refrescar(){
  	this.islogged=false;
  	if(this.authService.islogged==true){
  		this.islogged=true;
  	}
  	console.log('usuario is logged:',this.islogged);
  }

}
