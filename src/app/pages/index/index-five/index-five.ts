import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { featureOne, productList } from '../../../data/data';
import { feature } from '../../../data/index-five';
import { BlogFive } from "../../../components/blogs/blog-five/blog-five";
import { NewsLetterOne } from "../../../components/news-letter/news-letter-one/news-letter-one";
import { PartnerOne } from "../../../components/partner/partner-one/partner-one";
import { footerLink1, footerLink2, footerLink3, footerLink4 } from '../../../data/nav-data';

@Component({
  selector: 'app-index-five',
  imports: [
    CommonModule,
    NavbarOne,
    RouterLink,
    CarouselModule,
    BlogFive,
    NewsLetterOne,
    PartnerOne
],
  templateUrl: './index-five.html',
  styleUrl: './index-five.css'
})
export class IndexFive {
  ngAfterViewInit(): void {
    Aos.init()
  }
  feature = feature
  featureOne = featureOne
  productlist = productList
  footerLink1 = footerLink1
  footerLink2 = footerLink2
  footerLink3 = footerLink3
  footerLink4 = footerLink4

  year:any 

  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }
  
  showCategory:boolean = false

  category = [
    'Chair','Table','Sofa Set','Vases','Lamp & Light','Almirah','Dressing table','Watch','Mirror'
  ]
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
    margin: 10,
    nav: false,
    items:1,
    dots:true,
    responsive:{
      0:{items:1}
    }
  }
}
