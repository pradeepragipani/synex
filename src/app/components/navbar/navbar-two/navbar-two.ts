import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarMenuTwo } from "../navbar-menu-two/navbar-menu-two";


@Component({
  selector: 'app-navbar-two',
  imports: [
    CommonModule,
    RouterLink,
    NavbarMenuTwo
],
  templateUrl: './navbar-two.html',
  styleUrl: './navbar-two.css'
})
export class NavbarTwo {
  current = ''
  toggle: boolean = false;
  scroll: boolean = false

  onChildValueChange(newValue: boolean) {
    this.toggle = newValue;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.current = window.location.pathname

    const handlerScroll = () => {
      this.scroll = window.scrollY > 50;
    };
   
    window.addEventListener('scroll', handlerScroll);
  }
}
