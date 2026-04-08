import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productList } from '../../../data/data';
import Aos from 'aos';
import { LayoutOne } from "../../../components/product/layout-one/layout-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';



interface ProductList{
  id: number;
  image: string;
  tag: string;
  price: string;
  name: string;
}

@Component({
  selector: 'app-shop-v1',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarOne,
    LayoutOne,
    FooterOne,
],
  templateUrl: './shop-v1.html',
  styleUrl: './shop-v1.css'
})
export class ShopV1 {
  productList:ProductList[] = productList

  isLoading: boolean = false;
  categories: any[] = [];
  products: any[] = [];
  allProducts: any[] = [];
  selectedCategory: number | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private apiService: ApiService,
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = +params['category'];
      }
    });
    this.loadApiData();
    Aos.init()
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

  loadApiData(): void {
    this.isLoading = true;
    this.apiService.postData('getAllSubCategories', { "orgid":"0", "hflag":"S" }).subscribe({
      next: (data) => {
        this.categories = data.response;
        this.getCategoryItemsByIdsUpdated();
      },
      error: (error) => {
        console.error('Error loading API data', error);
      }
    });
  }
  getCategoryItemsByIdsUpdated(): void {
    this.isLoading = true;
    this.apiService.postData('getCategoryItemsByIdsUpdated', { "orgid":0, "cstatus":0, "hflag":"S" }).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.allProducts = data.response;
        if (this.selectedCategory) {
          this.onCategoryClick(this.selectedCategory);
        } else {
          this.products = this.allProducts.slice(0, 12);
        }
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading API data', error);
        this.isLoading = false;
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }

  onCategoryClick(categoryId: number): void {
    this.selectedCategory = categoryId;
    let products = this.allProducts.filter(product => product.catid === categoryId);
    this.products = products.slice(0, 12);
  }

  loadMore(): void {
    if (this.selectedCategory) {
      let products = this.allProducts.filter(product => product.catid === this.selectedCategory);
      this.products = this.products.concat(products.slice(this.products.length, this.products.length + 12));
    } else {
      this.products = this.products.concat(this.allProducts.slice(this.products.length, this.products.length + 12));
    }
  }
  
  toggleDropdown() {
    this.isopen = !this.isopen;
  }
  
  handleSelect(option: string, event: Event) {
    event.stopPropagation(); // Prevent click from propagating to parent
    this.isopen = false;
    this.selectedOption = option;
  }
}
