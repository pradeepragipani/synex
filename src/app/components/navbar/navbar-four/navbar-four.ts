import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavMenu } from "../nav-menu/nav-menu";

@Component({
  selector: 'app-navbar-four',
  imports: [
    CommonModule,
    RouterLink,
    NavMenu
  ],
  templateUrl: './navbar-four.html',
  styleUrl: './navbar-four.css'
})
export class NavbarFour {
  current = ''
  toggle: boolean = false;
  scroll: boolean = false

  onChildValueChange(newValue: boolean) {
    this.toggle = newValue;
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
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
