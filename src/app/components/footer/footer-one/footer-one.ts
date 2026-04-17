import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerLink } from '../../../data/nav-data';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer-one',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './footer-one.html',
  styleUrl: './footer-one.css'
})
export class FooterOne {

  footerLink = footerLink;

  year: any

  apiData: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    let address = sessionStorage.getItem('ofc-address');
    if (address) {
      this.apiData = JSON.parse(address);
      this.cdr.detectChanges();
    } else {
      this.loadApiData();
    }
  }

  loadApiData(): void {
    this.apiService.postData('getmasterdata', { "orgid": "0", "hflag": "S" }).subscribe({
      next: (data) => {
        this.apiData = data.response[0];
        sessionStorage.setItem('ofc-address', JSON.stringify(this.apiData));
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading API data', error);
      }
    });
  }
  scrollToTop() {
    window.scroll(0, 0);
  }
}
