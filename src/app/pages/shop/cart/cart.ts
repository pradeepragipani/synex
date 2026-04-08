import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { IncDec } from "../../../components/inc-dec/inc-dec";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { GlobalService } from '../../../services/global.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarOne,
    IncDec,
    FooterOne
],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  isLoggedIn: boolean = false;
  cartItem:boolean = false;
  cartItems: any[] = [];
  cartTotal: number = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private globalService: GlobalService,
  ) { }
  ngOnInit(): void {
    Aos.init();
    this.globalService.loggedInUserObservable.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.globalService.cartItemsObservable.subscribe(items => {
      this.cartItem = items.length > 0;
      this.cartItems = items;
      this.cartTotal = items.reduce((total, item) => total + (item.scost * item.quantity), 0);
      this.cdr.detectChanges();
    });
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
  removeFromCart(item: any) {
    this.globalService.removeFromCart(item);
  }

  checkout() {
    if (this.cartItems.length && this.isLoggedIn) {
      this.router.navigate(['/checkout']);
    } else if(this.cartItems.length && !this.isLoggedIn) {
      this.globalService.error('Please login to proceed to checkout');
      this.router.navigate(['/login']);
    } else {
      this.globalService.error('Your cart is empty');
    }
  }
}
