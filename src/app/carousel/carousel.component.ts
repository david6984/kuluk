import { Component, OnInit } from '@angular/core';
import {Ng2CarouselamosModule} from 'ng2-carouselamos';
import { Slider } from '../models/slider';
import { SliderService } from '../services/slider.service';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

items: Array<any>=[];
public sliders : Slider[];
public slider:Slider = new Slider();
public name:string='';

constructor(private sliderService:SliderService) {
 /* this.items=[
    {name:'https://res.cloudinary.com/kuluk/image/upload/v1518043522/27067332_1630745313671296_8162047250216444593_n.jpg'},
    {name:'https://res.cloudinary.com/kuluk/image/upload/v1519266130/KULUK-PCover02.png'},
    {name:'https://res.cloudinary.com/kuluk/image/upload/v1520619504/21077731_1488414601237702_4096480052720430901_n.jpg'},
    {name:'https://res.cloudinary.com/kuluk/image/upload/v1519266135/KULUK-PCover01.png'},
    {name:'https://res.cloudinary.com/kuluk/image/upload/v1518043522/26992494_1621888707890290_4134151992699333185_n.jpg'},
  ];*/ 
}

ngOnInit() {
  this.obtenerSliders();
}


public obtenerSliders(){
  this.sliderService.obtenerSliders().subscribe((data) => {
      console.log('entro al obtener sliders',data);
      this.sliders = data.slide;
      for(let i=0;i<this.sliders.length;i++){
        this.slider=this.sliders[i];
        this.items.push(this.slider);
      }
      console.log(this.items);
    });
}

}
