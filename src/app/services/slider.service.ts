import { Injectable } from '@angular/core';
import {Slider} from '../models/slider';
import { DataService } from '../services/data.service';

@Injectable()
export class SliderService {
	constructor(private dataService:DataService) { }

	public obtenerSliders(){
		return this.dataService.get('/api/slides');
	}

	public agregarSlider(slider:Slider){
		console.log('service add slider:', slider);
		return this.dataService.post('/api/slides',{'slide':slider});
	}

	public borrarSlider(slider:Slider){
		return this.dataService.delete('/api/slides/'+slider._id);
	}

	public editarSlider(slider:Slider){
		return this.dataService.put('/api/slides/'+slider._id,{'slide':slider});
	}
}