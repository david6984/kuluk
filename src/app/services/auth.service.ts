import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { DataService } from './data.service';
import { Usuario } from '../models/usuario';

@Injectable()
export class AuthService {
    public islogged:boolean=false;
	constructor(
		public requestOptions:RequestOptions, 
		public dataService:DataService){
		console.log('authService');
		this.loadToken();
	}

	loadToken(){
		this.dataService
			.get('/token').subscribe(
				(result) => {
	            	console.log('response here',result);
	            	this.requestOptions.headers.set('X-CSRF-TOKEN', result.csrfToken as string);
	            	this.requestOptions.headers.set('Content-type', 'application/json');
	            },
            	(err) => {
            		console.log('error code',err.status)
            	});
	}

	   public login(usuario: Usuario) {
	   		console.log('entro al login en auth');
	    	return this.dataService.get('/api/users'+usuario.usuario).map((data)=>{
			console.log('data',data);
         	return data;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}