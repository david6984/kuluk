import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { RouterLinkActive, RouterLink,Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public islogged:boolean=false;

  constructor(private authService:AuthService,private router:Router) {
  	this.ngOnInit();

   }

  ngOnInit() {
  	this.refrescar();
  }

  refrescar(){
  	this.islogged=false;
        this.router.routeReuseStrategy.shouldReuseRoute=function(){
      return false;
    }
    this.router.events.subscribe((evnt)=>{
      if(evnt instanceof Navigator){
        this.router.navigated=false;
        this.router.navigate([this.router.url]);
      }
    });
  	if(this.authService.islogged==true){
  		this.islogged=true;
  	}
  }

}