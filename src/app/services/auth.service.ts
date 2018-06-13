import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class AuthService {
    public islogged:boolean=false;
    public loggeduser: any;
	constructor(
		public requestOptions:RequestOptions, 
		public dataService:DataService){
		console.log('authService');
		this.loadToken("");
	}

	loadToken(usuario){
		console.log('desde el auth inicio',this.islogged);
		this.dataService
			.get('/token').subscribe(
				(result) => {
	            	console.log('response here',result);
	            	this.requestOptions.headers.set('X-CSRF-TOKEN', result.csrfToken as string);
	            	this.requestOptions.headers.set('Content-type', 'application/json');
	            	if(usuario!=""||this.loggeduser!=null){
	            		if(usuario!=""){
	            			this.loggeduser=usuario;	
	            		}	            		
	            		this.islogged=true;
	            	}
	            	console.log('desde el auth final',this.islogged);
	            },
            	(err) => {
            		console.log('error code',err.status)
            	});
	}

}