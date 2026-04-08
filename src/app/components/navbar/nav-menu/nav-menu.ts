import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import {NgClickOutsideDirective} from 'ng-click-outside2';
import { wishListData } from '../../../data/nav-data';
import { Switcher } from "../../switcher/switcher";
import { GlobalService } from '../../../services/global.service';
import { FormsModule } from '@angular/forms';

interface WishListData{
    image: string;
    name: string;
    price: string;
    desc: string;
}


@Component({
  selector: 'app-nav-menu',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NgClickOutsideDirective,
    Switcher
],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css'
})
export class NavMenu {
  @Input() toggle!: boolean;
  @Output() childValueChange = new EventEmitter<boolean>();

  isLoggedIn: boolean = false;
  wishItem:boolean = false;
  cartItem:boolean = false;
  cartItems: any[] = [];
  cartTotal: number = 0;
  wishListData:WishListData[] = wishListData

  search:boolean = false

  constructor(
    private globalService: GlobalService,
  ) { }

  ngOnInit(): void {
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

  toggleValue() {
    this.toggle = !this.toggle;
    this.childValueChange.emit(this.toggle);  // Send updated value to parent
  }

  onClickedOutside(e: Event) {
    this.wishItem = false
  }
  onClickedOutside2(e: Event) {
    this.cartItem = false
  }

  logout() {
    this.globalService.logout();
  }
}
