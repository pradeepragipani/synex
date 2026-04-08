import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { partnerData } from '../../../data/data';
import Aos from 'aos';
import { RouterLink } from '@angular/router';
import {  CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-partner-two',
  imports: [
    CommonModule,
    RouterLink,
    CarouselModule
  ],
  templateUrl: './partner-two.html',
  styleUrl: './partner-two.css'
})
export class PartnerTwo {
 partnerData = partnerData
  ngAfterViewInit(): void {
    Aos.init();
  }

  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    items:5,
    dots:true
  }
  customOptions2 = {
    loop: true,
    margin: 10,
    nav: false,
    items:5,
    dots:true
  }
}
