import { Component } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

@Component({
  selector: 'app-payment-confirmation',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './payment-confirmation.html',
  styleUrl: './payment-confirmation.css'
})
export class PaymentConfirmation {

}
