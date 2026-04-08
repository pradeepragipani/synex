import { Component } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AccountTab } from "../../../components/account-tab/account-tab";
import Aos from 'aos';
import { cartData } from '../../../data/data';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface Data{
  image: string;
  tag: string;
  name: string;
  price: string;
  status: string;
}
@Component({
  selector: 'app-order-history',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    AccountTab,
    FooterOne
],
  templateUrl: './order-history.html',
  styleUrl: './order-history.css'
})
export class OrderHistory {
  ngAfterViewInit(): void {
    Aos.init()
  }

  cartData:Data[] = cartData

}
