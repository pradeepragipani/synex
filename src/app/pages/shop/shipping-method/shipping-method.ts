import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

@Component({
  selector: 'app-shipping-method',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './shipping-method.html',
  styleUrl: './shipping-method.css'
})
export class ShippingMethod {
 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    Aos.init()
  }
}
