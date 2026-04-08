import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import {NgClickOutsideDirective} from 'ng-click-outside2';
import { wishListData } from '../../../data/nav-data';
import { Switcher } from "../../switcher/switcher";

interface WishListData{
  image: string;
  name: string;
  price: string;
  desc: string;
}

@Component({
  selector: 'app-navbar-menu-two',
  imports: [
    CommonModule,
    RouterLink,
    NgClickOutsideDirective,
    Switcher
  ],
  templateUrl: './navbar-menu-two.html',
  styleUrl: './navbar-menu-two.css'
})
export class NavbarMenuTwo {
 @Input() toggle!: boolean;
  @Output() childValueChange = new EventEmitter<boolean>();

  wishItem:boolean = false;
  cartItem:boolean = false;
  wishListData:WishListData[] = wishListData

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
}
