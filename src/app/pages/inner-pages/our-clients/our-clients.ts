import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Aos from 'aos';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { partnerDataTwo } from '../../../data/data';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface PartnerData{
  image: string;
  image2: string;
  delay: string;
}

@Component({
  selector: 'app-our-clients',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './our-clients.html',
  styleUrl: './our-clients.css'
})
export class OurClients {
  ngAfterViewInit(): void {
    Aos.init()
  }

  partnerData:PartnerData[] = partnerDataTwo

}
