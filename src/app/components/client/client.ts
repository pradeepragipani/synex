import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { teamData } from '../../data/data';

import {  CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';


interface TeamData{
    image: string;
    name: string;
    location: string;
    desc: string;
}

@Component({
  selector: 'app-client',
  imports: [
    CommonModule,
    CarouselModule
  ],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {
    teamData:TeamData[] = teamData

    @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;

    customOptions = {
      loop: true,
      margin: 10,
      nav: false,
      items:1,
      dots:true,
      autoplay:true,
      responsive:{
        0:{items:1}
      }
    }

    prevSlide() {
      this.owlCarousel.prev();
    }

    nextSlide() {
      this.owlCarousel.next(); 
    }
   
  }

