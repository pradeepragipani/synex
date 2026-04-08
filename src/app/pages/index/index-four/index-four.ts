import { Component } from '@angular/core';
import { NavbarFour } from "../../../components/navbar/navbar-four/navbar-four";
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { servicesData } from '../../../data/index-three';
import { featureOne, productList } from '../../../data/data';
import { BestSeller } from "../../../components/product/best-seller/best-seller";
import { PartnerOne } from "../../../components/partner/partner-one/partner-one";
import { BlogFour } from "../../../components/blogs/blog-four/blog-four";
import { NewsLetterTwo } from "../../../components/news-letter/news-letter-two/news-letter-two";
import { FooterFour } from "../../../components/footer/footer-four/footer-four";

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

interface FeatureOne{
    id: number
    image: string;
    title: string;
    desc: string;
    delay: string;
}

@Component({
  selector: 'app-index-four',
  imports: [
    CommonModule,
    NavbarFour,
    RouterLink,
    BestSeller,
    PartnerOne,
    BlogFour,
    NewsLetterTwo,
    FooterFour
],
  templateUrl: './index-four.html',
  styleUrl: './index-four.css'
})
export class IndexFour {

  servicesData:ServicesData[] = servicesData

  productList:ProductList[] = productList

  featureOne = featureOne

  ngAfterViewInit(): void {
    Aos.init()
  }

}
