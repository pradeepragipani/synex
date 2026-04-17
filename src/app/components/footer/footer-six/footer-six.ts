import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { footerLink } from '../../../data/nav-data';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer-six',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './footer-six.html',
  styleUrl: './footer-six.css'
})
export class FooterSix {

  year: any

  apiData?: any;

  footerLink = footerLink;

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
