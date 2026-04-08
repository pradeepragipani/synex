import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import Aos from 'aos';
import { IncDec } from "../../../components/inc-dec/inc-dec";
import { DetailTab } from "../../../components/product/detail-tab/detail-tab";
import { LayoutOne } from "../../../components/product/layout-one/layout-one";
import { productList } from '../../../data/data';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { FormsModule } from '@angular/forms';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-product-details',
  imports: [
    RouterLink,
    CommonModule,
    FormsModule,
    NavbarOne,
    IncDec,
    DetailTab,
    LayoutOne,
    FooterOne
],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  ngAfterViewInit(): void {
    Aos.init()
  }

  productList = productList

  activeImage:number = 1

  countdownDate: Date = new Date('September 13, 2025 6:0:0');

  days: number = 0
  hours: number = 0
  minutes: number =0
  seconds: number = 0

  data: any;
  id: any;
  relatedProducts: any[] = [];
  isCardAdded: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private globalService: GlobalService,
  ){ }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      window.scrollTo(0, 0);
      this.id = params['id'];
      this.id = this.route.snapshot.params['id'];
      // this.data = productList.find(item => item.id === parseInt(this.id))
      this.data = localStorage.getItem('productData') ? JSON.parse(localStorage.getItem('productData')!) : null;
      this.relatedProducts = localStorage.getItem('relatedProducts') ? JSON.parse(localStorage.getItem('relatedProducts')!) : [];
      this.globalService.cartItemsObservable.subscribe(items => {
        const itemInCart = items.find((item: any) => item.id === this.data?.id);
        this.isCardAdded = !!itemInCart;
        this.data.quantity = itemInCart ? itemInCart.quantity : 0;
      });
      this.cdr.detectChanges();
      setInterval(() => {
        this.calculateTime();
      }, 1000);
    });
  }
  calculateTime() {
    const now = new Date().getTime();
    const difference = this.countdownDate.getTime() - now;
    this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }

  addToCart(item: any): void {
    item.quantity = 1;
    this.globalService.addToCart(item);
    this.isCardAdded = true;
  }
  removeFromCart(item: any): void {
    this.globalService.removeFromCart(item);
    this.isCardAdded = false;
  }
  increaseQuantity(item: any) {
    item.quantity += 1;
    this.globalService.updateCartItem(item);
  }
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.globalService.updateCartItem(item);
    }
  }

}
