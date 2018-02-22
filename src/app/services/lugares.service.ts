import { Injectable } from '@angular/core';
import { Lugar } from '../models/lugar';
import { DataService } from '../services/data.service';

@Injectable()
export class LugaresService {

  constructor(private dataService:DataService) { }

	public obtenerLugares(){
		return this.dataService.get('/api/places');
	}

	public agregarLugar(lugar:Lugar){
		return this.dataService.post('/api/places',{'place':lugar});
	}

	public borrarLugar(lugar:Lugar){
		return this.dataService.delete('/api/places/'+lugar._id);
	}

	public editarLugar(lugar:Lugar){
		return this.dataService.put('/api/places/'+lugar._id,{'place':lugar});
	}
}
