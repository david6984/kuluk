import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Injectable } from '@angular/core';
import { RouterLinkActive, RouterLink, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DatasharingService } from '../services/datasharing.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	public islogged:boolean;

  constructor(private authService:AuthService,private router:Router,private dataSharing:DatasharingService) {
        // Subscribe here, this will automatically update 
        // "isUserLoggedIn" whenever a change to the subject is made.
        this.dataSharing.isUserLoggedIn.subscribe( value => {
            this.islogged = value;
        });
  	this.ngOnInit();
   }

  ngOnInit() {
  }

}