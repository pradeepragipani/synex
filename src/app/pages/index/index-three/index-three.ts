import { Component, HostListener, ViewChild } from '@angular/core';
import { NavbarThree } from "../../../components/navbar/navbar-three/navbar-three";
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {  CarouselModule,CarouselComponent  } from 'ngx-owl-carousel-o';
import { servicesData } from '../../../data/index-three';
import { productList } from '../../../data/data';
import { BlogThree } from "../../../components/blogs/blog-three/blog-three";
import { PartnerOne } from "../../../components/partner/partner-one/partner-one";
import { FooterThree } from "../../../components/footer/footer-three/footer-three";


interface ServicesData{
  image: string;
  image2: string;
  title: string;
  product: string;
  desc: string;
}

interface ProductList{
    id: number;
    image: string;
    tag: string;
    price: string;
    name: string;
}

@Component({
  selector: 'app-index-three',
  imports: [
    CommonModule,
    RouterLink,
    NavbarThree,
    CarouselModule,
    BlogThree,
    PartnerOne,
    FooterThree
],
  templateUrl: './index-three.html',
  styleUrl: './index-three.css'
})
export class IndexThree {

  servicesData:ServicesData[] = servicesData

  productList:ProductList[] = productList


  public  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
    Aos.init();
  }

  customOptions = {
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
    responsive:{
      0:{items:1}
    }
  };

}
