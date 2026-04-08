import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Aos from 'aos';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

@Component({
  selector: 'app-error',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class Error {
  // ngAfterViewInit(): void {
  //   Aos.init()
  // }
}
