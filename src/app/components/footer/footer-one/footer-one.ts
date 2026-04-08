import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerLink, footerLink1, footerLink2, footerLink3, footerLink4 } from '../../../data/nav-data';
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
  footerLink1 = footerLink1
  footerLink2 = footerLink2
  footerLink3 = footerLink3
  footerLink4 = footerLink4

  year: any

  apiData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear()
    this.loadApiData();
  }

  loadApiData(): void {
    this.apiService.postData('getmasterdata', { "orgid": "0", "hflag": "S" }).subscribe({
      next: (data) => {
        this.apiData = data.response[0];
      },
      error: (error) => {
        console.error('Error loading API data', error);
      }
    });
  }
}
