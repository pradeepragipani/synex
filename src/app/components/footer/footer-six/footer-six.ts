import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { footerLink, footerLink1, footerLink2, footerLink3, footerLink4 } from '../../../data/nav-data';
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
  footerLink1 = footerLink1
  footerLink2 = footerLink2
  footerLink3 = footerLink3
  footerLink4 = footerLink4

  constructor(
    private cdr: ChangeDetectorRef,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear()
    this.loadApiData();
  }

  loadApiData(): void {
    this.apiService.postData('getmasterdata', { "orgid": "0", "hflag": "S" }).subscribe({
      next: (data) => {
        this.apiData = data.response[0];
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
