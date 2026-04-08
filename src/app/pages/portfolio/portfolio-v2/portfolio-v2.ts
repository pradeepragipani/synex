import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { portfolioTwo } from '../../../data/portfolio-data';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface Data{
    id: number;
    image: string;
    category: string[];
    tag: string;
    name: string;
}

@Component({
  selector: 'app-portfolio-v2',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './portfolio-v2.html',
  styleUrl: './portfolio-v2.css'
})
export class PortfolioV2 {

  ngAfterViewInit(): void {
    Aos.init()
    this.updateFilteredItems();
  }
  activeFilter:string =  "*"

  filterItem: any[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.updateFilteredItems();
  }

  tabChange(item:any){
    this.activeFilter = item
    this.updateFilteredItems();
  }

  portfolioData:Data[] = portfolioTwo

  updateFilteredItems(): void {
    this.filterItem = this.activeFilter === "*"
      ? this.portfolioData
      : this.portfolioData.filter((item) => item.category?.includes(this.activeFilter));
  }

 
}

