import { Component, ViewChild } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { categoryOne, featureOne, productList } from '../../../data/data';
import { LayoutOne } from "../../../components/product/layout-one/layout-one";
import { BlogOne } from "../../../components/blogs/blog-one/blog-one";
import { PartnerOne } from "../../../components/partner/partner-one/partner-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { ScrollToTop } from "../../../components/scroll-to-top/scroll-to-top";

import {  CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import Aos from 'aos';

interface CategoryData{
    image: string;
    item: string;
    name: string;
}

interface ProductList{
    id: number;
    image: string;
    tag: string;
    price: string;
    name: string;
}

interface Feature{
    image: string;
    title: string;
    desc: string;
    delay: string;
}

@Component({
  selector: 'app-index-one',
  imports: [
    RouterLink,
    CommonModule,
    NavbarOne,
    LayoutOne,
    BlogOne,
    PartnerOne,
    FooterOne,
    ScrollToTop,
    CarouselModule,
],
  templateUrl: './index-one.html',
  styleUrl: './index-one.css'
})
export class IndexOne {

  categoryData:CategoryData[] = categoryOne
  productList:ProductList[] = productList
  feature:Feature[] = featureOne

  @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;
  currentSlideIndex:any = 0;

  ngAfterViewInit(): void {
    Aos.init();
    window.dispatchEvent(new Event('resize'));
  }
  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    items:1,
    dots:true,
    responsive:{
      0:{items:1}
    }
    
  }
  customOptions2 = {
    loop: true,
    autoplay:true,
    autoplayTimeout: 2000, 
    margin: 10,
    nav: false,
    dots:false,
    items:3,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  }

  prevSlide() {
    this.owlCarousel.prev(); // Moves to the previous slide
  }

  nextSlide() {
    this.owlCarousel.next(); // Moves to the next slide
  }
 
}
