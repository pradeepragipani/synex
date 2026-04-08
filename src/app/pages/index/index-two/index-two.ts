import { Component } from '@angular/core';
import { NavbarTwo } from "../../../components/navbar/navbar-two/navbar-two";
import { CommonModule } from '@angular/common';
import Aos from 'aos';
import { RouterLink } from '@angular/router';
import { productList, productSlider } from '../../../data/data';
import { Client } from "../../../components/client/client";
import { BlogTwo } from "../../../components/blogs/blog-two/blog-two";
import { NewsLetterOne } from "../../../components/news-letter/news-letter-one/news-letter-one";
import { PartnerOne } from "../../../components/partner/partner-one/partner-one";
import { FooterTwo } from "../../../components/footer/footer-two/footer-two";

@Component({
  selector: 'app-index-two',
  imports: [
    CommonModule,
    NavbarTwo,
    RouterLink,
    Client,
    BlogTwo,
    NewsLetterOne,
    PartnerOne,
    FooterTwo
],
  templateUrl: './index-two.html',
  styleUrl: './index-two.css'
})
export class IndexTwo {

  productList = productList
  productSlider = productSlider
  
  
  ngAfterViewInit(): void {
    Aos.init();  
  }
  
}
