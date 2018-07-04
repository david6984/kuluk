import { Injectable } from '@angular/core';
import {Slider} from '../models/slider';
import { DataService } from '../services/data.service';

@Injectable()
export class SliderService {
	constructor(private dataService:DataService) { }

	public obtenerSliders(){
		return this.dataService.get('/api/sliders');
	}

	public agregarSlider(slider:Slider){
		console.log('service add slider:', slider);
		return this.dataService.post('/api/sliders',{'slide':slider});
	}

	public borrarSlider(slider:Slider){
		return this.dataService.delete('/api/sliders/'+slider._id);
	}

	public editarSlider(slider:Slider){
		return this.dataService.put('/api/sliders/'+slider._id,{'slide':slider});
	}
}