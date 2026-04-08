import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

@Component({
  selector: 'app-forger-password',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './forger-password.html',
  styleUrl: './forger-password.css'
})
export class ForgerPassword {
  ngAfterViewInit(): void {
    Aos.init()    
  }
}
