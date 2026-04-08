import { Component } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { productList } from '../../../data/data';
import Aos from 'aos';
import { LayoutOne } from "../../../components/product/layout-one/layout-one";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface ProductList{
    id: number;
    image: string;
    tag: string;
    price: string;
    name: string;
}

@Component({
  selector: 'app-shop-v2',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    LayoutOne,
    NgxSliderModule,
    FooterOne
],
  templateUrl: './shop-v2.html',
  styleUrl: './shop-v2.css'
})
export class ShopV2 {


  value: number = 20;
  highValue: number = 60;
  
  options: any = {
    floor: 0,
    ceil: 100,
  };

  productList:ProductList[] = productList

  ngAfterViewInit(): void {
    Aos.init()
  }

  isopen: boolean = false;
  selectedOption: string = "Navana Furniture";
  option = [
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

}
