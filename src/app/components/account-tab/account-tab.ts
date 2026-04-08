import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-tab',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './account-tab.html',
  styleUrl: './account-tab.css'
})
export class AccountTab {
  current = ''

  ngOnInit(): void {
    this.current = window.location.pathname
  }
}
