import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { portfolioTwo } from '../../../data/portfolio-data';

import {  CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface PortfolioData{
    id: number;
    image: string;
    category: string[];
    tag: string;
    name: string;
}

@Component({
  selector: 'app-portfolio-v3',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    CarouselModule,
    FooterOne
],
  templateUrl: './portfolio-v3.html',
  styleUrl: './portfolio-v3.css'
})
export class PortfolioV3 {
 
  ngAfterViewInit(): void {
    Aos.init()
  }

  portfolioData:PortfolioData[] = portfolioTwo

  activeTab:number = 1

  @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;

  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    items:1,
    dots:false,
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
