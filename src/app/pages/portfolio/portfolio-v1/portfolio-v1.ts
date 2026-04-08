import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { portfolioOne } from '../../../data/portfolio-data';
import Aos from 'aos';

import {  CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface PortfolioOne{
    id: number;
    image: string;
    tag: string;
    name: string;
}

@Component({
  selector: 'app-portfolio-v1',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    CarouselModule,
    FooterOne
],
  templateUrl: './portfolio-v1.html',
  styleUrl: './portfolio-v1.css'
})
export class PortfolioV1 {

  ngOnInit(): void {
    Aos.init()
  }
 
  portfolioData:PortfolioOne[] = portfolioOne


   @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;

   customOptions = {
    loop: true,
    margin: 30,
    nav: false,
    items:1,
    dots:true,
    responsive:{
      0:{items:1}
    }
  }

  prevSlide() {
    this.owlCarousel.prev(); // Moves to the previous slide
  }

  nextSlide() {
    this.owlCarousel.next(); // Moves to the next slide
  }
}
