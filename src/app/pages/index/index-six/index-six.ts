import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { servicesData } from '../../../data/index-three';
import { productList } from '../../../data/data';
import { BlogSix } from "../../../components/blogs/blog-six/blog-six";
import { PartnerOne } from "../../../components/partner/partner-one/partner-one";
import { FooterSix } from "../../../components/footer/footer-six/footer-six";
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';

interface ProductList {
  id: number;
  image: string;
  tag: string;
  price: string;
  name: string;
}

@Component({
  selector: 'app-index-six',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarOne,
    BlogSix,
    PartnerOne,
    FooterSix
  ],
  templateUrl: './index-six.html',
  styleUrl: './index-six.css'
})
export class IndexSix {

  servicesData = servicesData
  productList: ProductList[] = productList

  tendingItems: any[] = [];
  categories: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    Aos.init();
    this.getTrendingItems();
    this.getAllSubCategories();
  }

  getTrendingItems(): void {
    this.apiService.postData('getTrendingItems', {}).subscribe({
      next: (data) => {
        this.tendingItems = data.response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading API data', error);
      }
    });
  }

  getAllSubCategories(): void {
    this.apiService.postData('getAllSubCategories', { "orgid":"0", "hflag":"S" }).subscribe({
      next: (data) => {
        this.categories = data.response;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading API data', error);
      }
    });
  }
}
