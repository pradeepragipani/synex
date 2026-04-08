import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { AccountTab } from "../../../components/account-tab/account-tab";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

@Component({
  selector: 'app-edit-account',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    AccountTab,
    FooterOne
],
  templateUrl: './edit-account.html',
  styleUrl: './edit-account.css'
})
export class EditAccount {
  ngAfterViewInit(): void {
    Aos.init()
  }
}
