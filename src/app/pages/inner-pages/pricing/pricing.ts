import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { pricingData } from '../../../data/data';
import { PartnerOne } from "../../../components/partner/partner-one/partner-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface PricingData{
    title: string;
    month: string;
    year: string;
    feature: string[];
}

@Component({
  selector: 'app-pricing',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    PartnerOne,
    FooterOne
],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {
  ngAfterViewInit(): void {
      Aos.init()
  }

  pricingData:PricingData[] = pricingData

  price:boolean = true

  onInputChange=()=>{
    this.price = !this.price
  }
}
