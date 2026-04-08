import { Component } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { productListTwo } from '../../../data/data';
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface ProductListTwo{
    id: number;
    image: string;
    offer: boolean;
    price: string;
    category: string[];
    name: string;
}

@Component({
  selector: 'app-shop-v4',
  imports: [
    RouterLink,
    CommonModule,
    NavbarOne,
    FooterOne
],
  templateUrl: './shop-v4.html',
  styleUrl: './shop-v4.css'
})
export class ShopV4 {
  ngAfterViewInit(): void {
    Aos.init()
    this.updateFilteredItems();
  }

  isopen: boolean = false;
  selectedOption: string = "Navana Furniture";
  options = [
    "Navana Furniture",
    "RFL Furniture",
    "Gazi Furniture",
    "Plastic Furniture",
    "Luxury Furniture",
  ];
  
  toggleDropdown() {
    this.isopen = !this.isopen;
  }
  
  handleSelect(option: string, event: Event) {
    event.stopPropagation(); // Prevent click from propagating to parent
    this.isopen = false;
    this.selectedOption = option;
  }

  productListTwo:ProductListTwo[] = productListTwo


  activeFilter:string =  "*"

  filterItem: any[] = [];

  tabChange(item:any){
    this.activeFilter = item
    this.updateFilteredItems();
  }

  updateFilteredItems(): void {
    this.filterItem = this.activeFilter === "*"
      ? this.productListTwo
      : this.productListTwo.filter((item) => item.category?.includes(this.activeFilter));
  }

}
