import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

@Component({
  selector: 'app-payment-success',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './payment-success.html',
  styleUrl: './payment-success.css'
})
export class PaymentSuccess {

}
