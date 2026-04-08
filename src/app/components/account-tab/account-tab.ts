import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlobalService } from '../../services/global.service';

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

  constructor(
    private globalService: GlobalService,
  ) { }

  ngOnInit(): void {
    this.current = window.location.pathname
  }

  logout() {
    this.globalService.logout();
  }
}
