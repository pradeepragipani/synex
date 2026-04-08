import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { teamDataTwo } from '../../../data/data';
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

@Component({
  selector: 'app-team',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {
  teamdata = teamDataTwo

  ngAfterViewInit(): void {
    Aos.init()
  }
}
