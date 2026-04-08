import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { AccountTab } from "../../../components/account-tab/account-tab";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

@Component({
  selector: 'app-my-profile',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    AccountTab,
    FooterOne
],
  templateUrl: './my-profile.html',
  styleUrl: './my-profile.css'
})
export class MyProfile {
  ngOnInit(): void {
    Aos.init()
  }
}
