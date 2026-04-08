import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { AccountTab } from "../../../components/account-tab/account-tab";
import Aos from 'aos';
import { productList } from '../../../data/data';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface ProductList{
    id: number;
    image: string;
    tag: string;
    price: string;
    name: string;
}

@Component({
  selector: 'app-wishlist',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    AccountTab,
    FooterOne
],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css'
})
export class Wishlist {
  ngAfterViewInit(): void {
    Aos.init()
  }

  productList:ProductList[] = productList
}
