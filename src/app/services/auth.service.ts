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
	            },
            	(err) => {
            		console.log('error code',err.status)
            	});
	}

	VerifyToken(){
		this.dataService
			.get('/login').subscribe(
				(result)=>{
					console.log('Valida token',result);
				},
				(err)=>{
					console.log('error de token',err.status)
				});
	}

	logout(){
		this.islogged=false;
		this.loggeduser=null;
	}

}