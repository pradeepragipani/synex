import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { partnerData } from '../../../data/data';
import Aos from 'aos';
import { RouterLink } from '@angular/router';
import {  CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partner-one',
  imports: [
    CommonModule,
    RouterLink,
    CarouselModule
  ],
  templateUrl: './partner-one.html',
  styleUrl: './partner-one.css'
})
export class PartnerOne {

  partnerData = partnerData
  ngAfterViewInit(): void {
    Aos.init();
  }

  customOptions = {
    loop: true,
    autoplay: true,
    margin: 130,
    nav: false,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 5 },
    },
  }

}
