import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class AuthService {
    public islogged:boolean=false;
	public loggeduser: any;
	public ptoken:string;
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
					this.ptoken=this.requestOptions.headers.get('X-CSRF-TOKEN');
					console.log('leyendo token',this.ptoken);
	            },
            	(err) => {
            		console.log('error code',err.status)
            	});
	}

	loguser(usuario){
		this.loggeduser=usuario;
		this.islogged=true;
	}

	logout(){
		this.islogged=false;
		this.loggeduser=null;
	}

}