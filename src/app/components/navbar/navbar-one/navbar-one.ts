import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavMenu } from "../nav-menu/nav-menu";
import { GlobalService } from '../../../services/global.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar-one',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavMenu
],
  templateUrl: './navbar-one.html',
  styleUrl: './navbar-one.css'
})
export class NavbarOne {

  isLoggedIn: boolean = false;
  current = '';
  toggle: boolean = false;
  scroll: boolean = false;

  constructor(
    private globalService: GlobalService,
  ) { }

  onChildValueChange(newValue: boolean) {
    this.toggle = newValue;
  }
  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.current = window.location.pathname;

    const handlerScroll = () => {
      this.scroll = window.scrollY > 50;
    };
   
    window.addEventListener('scroll', handlerScroll);
    this.globalService.loggedInUserObservable.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
  logout() {
    this.globalService.logout();
  }
 
}
