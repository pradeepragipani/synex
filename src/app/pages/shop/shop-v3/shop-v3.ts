import { Component, ViewChild } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Aos from 'aos';
import { productList, productSlider } from '../../../data/data';

import {  CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { LayoutOne } from "../../../components/product/layout-one/layout-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";


interface ProductSlider{
    image: string;
    name: string;
    product: string;
}

interface ProductList{
    id: number;
    image: string;
    tag: string;
    price: string;
    name: string;
}

@Component({
  selector: 'app-shop-v3',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    CarouselModule,
    LayoutOne,
    FooterOne
],
  templateUrl: './shop-v3.html',
  styleUrl: './shop-v3.css'
})
export class ShopV3 {
  ngAfterViewInit(): void {
    Aos.init()
    window.dispatchEvent(new Event('resize'));

  }

  productSlider:ProductSlider[] = productSlider

  productList:ProductList[] = productList

  @ViewChild('owlCarousel') owlCarousel!: CarouselComponent;

  customOptions = {
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
    this.owlCarousel.prev(); 
  }

  nextSlide() {
    this.owlCarousel.next(); 
  }

  isopen: boolean = false;
  selectedOption: string = "Navana Furniture";
  options = [
    "Navana Furniture",
    "RFL Furniture",
    "Gazi Furniture",
    "Plastic Furniture",
    "Luxury Furniture",
  ];
  
  toggleDropdown() {
    this.isopen = !this.isopen;
  }
  
  handleSelect(option: string, event: Event) {
    event.stopPropagation(); // Prevent click from propagating to parent
    this.isopen = false;
    this.selectedOption = option;
  }

  isopen2: boolean = false;
  selectedOption2: string = "Sort By";
  options2 = [
    "Sort by Latest",
    "Sort by Name",
    "Sort by Number",
    "Sort by Price",
    "Sort by Date",
  ];
  
  toggleDropdown2() {
    this.isopen2 = !this.isopen2;
  }
  
  handleSelect2(option: string, event: Event) {
    event.stopPropagation(); // Prevent click from propagating to parent
    this.isopen2 = false;
    this.selectedOption2 = option;
  }
}
