import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public islogged:boolean;

  constructor(private authService:AuthService) {
   }

  ngOnInit() {
  	this.islogged=false;
  	console.log('entro al nav oninit');
  	if(this.authService.islogged==true){
  		this.islogged=true;
  	}
  	console.log('is logged:',this.islogged);
  }

}