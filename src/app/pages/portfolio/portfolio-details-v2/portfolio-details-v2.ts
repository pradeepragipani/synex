import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";

import {  CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';

import Aos from 'aos';
import { RelatedProject } from "../../../components/related-project/related-project";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { portfolioTwo } from '../../../data/portfolio-data';

@Component({
  selector: 'app-portfolio-details-v2',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    CarouselModule,
    RelatedProject,
    FooterOne
],
  templateUrl: './portfolio-details-v2.html',
  styleUrl: './portfolio-details-v2.css'
})
export class PortfolioDetailsV2 {
  ngAfterViewInit(): void {
    Aos.init()
  }

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

  data:any
  id:any
  constructor(private Router:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.Router.snapshot.params['id']
    this.data = portfolioTwo.find(item => item.id === parseInt(this.id))
  }
}
