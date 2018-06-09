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
	   	console.log('entro al login');
	    return this.dataService.get('/api/users'+usuario.usuario)
            .map(user => {
            	console.log('entro al map login en auth');
            	console.log(user);
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    console.log('entro al if login en auth');
                }
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}