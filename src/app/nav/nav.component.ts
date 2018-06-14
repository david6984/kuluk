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
         // override the route reuse strategy
     this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }

     this.router.events.subscribe((evt) => {
        if (evt instanceof Navigator) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           window.scrollTo(0, 0);
        }
    });

   }

  ngOnInit() {
  	this.refrescar();
  }

  refrescar(){
  	this.islogged=false;
  	if(this.authService.islogged==true){
      console.log('if del nav');
  		this.islogged=true;
  	}
  }

}