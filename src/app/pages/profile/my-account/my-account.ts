import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { AccountTab } from "../../../components/account-tab/account-tab";
import Aos from 'aos';
import { cartData } from '../../../data/data';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface CartData{
    image: string;
    tag: string;
    name: string;
    price: string;
    status: string;
}

@Component({
  selector: 'app-my-account',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    AccountTab,
    FooterOne
],
  templateUrl: './my-account.html',
  styleUrl: './my-account.css'
})
export class MyAccount {

  ngAfterViewInit(): void {
    Aos.init()
  }

  cartData:CartData[] = cartData

}
