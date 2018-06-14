import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Injectable } from '@angular/core';
import { RouterLinkActive, RouterLink, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public islogged:boolean=false;

  constructor(private authService:AuthService,private router:Router ) {
  	this.ngOnInit();
   }
   
  ngOnInit() {
  }

  refrescar(){
  	if(this.authService.islogged==true){
      console.log('if del nav');
  		this.islogged=true;
  	}else{
      this.islogged=false;
    }
  }

}