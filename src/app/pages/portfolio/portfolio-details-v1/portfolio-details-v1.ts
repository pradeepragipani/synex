import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { RelatedProject } from "../../../components/related-project/related-project";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { portfolioOne } from '../../../data/portfolio-data';

@Component({
  selector: 'app-portfolio-details-v1',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    RelatedProject,
    FooterOne
],
  templateUrl: './portfolio-details-v1.html',
  styleUrl: './portfolio-details-v1.css'
})
export class PortfolioDetailsV1 {

  constructor(private Router:ActivatedRoute){}

  id:any
  data:any

  ngOnInit(): void {
    this.id = this.Router.snapshot.params['id']
    this.data = portfolioOne.find(item => item.id === parseInt(this.id))
  }

}
