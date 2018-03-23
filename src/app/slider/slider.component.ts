import { Component, OnInit } from '@angular/core';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
	items: Array<any>=[];

  constructor() {
  	this.items=[
  		{name:'http://res.cloudinary.com/kuluk/image/upload/v1520619509/28701033_1670724599673367_2486273112074060735_o.jpg'},
  		{name:'http://res.cloudinary.com/kuluk/image/upload/v1520619504/21077731_1488414601237702_4096480052720430901_n.jpg'},
  		{name:'http://res.cloudinary.com/kuluk/image/upload/v1519266841/Kuluk_foto_producto.jpg'},
  		{name:'http://res.cloudinary.com/kuluk/image/upload/v1520619509/28701033_1670724599673367_2486273112074060735_o.jpg'},
  		{name:'http://res.cloudinary.com/kuluk/image/upload/v1520619504/21077731_1488414601237702_4096480052720430901_n.jpg'},
  		{name:'http://res.cloudinary.com/kuluk/image/upload/v1519266841/Kuluk_foto_producto.jpg'},
  	]; 
  }

  ngOnInit() {
  }

}