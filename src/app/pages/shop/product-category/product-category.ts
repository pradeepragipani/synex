import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { productList } from '../../../data/data';
import { LayoutOne } from "../../../components/product/layout-one/layout-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface ProductList{
    id: number;
    image: string;
    tag: string;
    price: string;
    name: string;
}

@Component({
  selector: 'app-product-category',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    LayoutOne,
    FooterOne
],
  templateUrl: './product-category.html',
  styleUrl: './product-category.css'
})
export class ProductCategory {

  productList:ProductList[] = productList

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    Aos.init()
  }
}
