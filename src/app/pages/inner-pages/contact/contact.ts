import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  isLoading: boolean = false;
  apiData: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    Aos.init();
    this.loadApiData();
  }

  loadApiData(): void {
    this.isLoading = true;
    this.apiService.postData('getmasterdata', { "orgid": "0", "hflag": "S" }).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.apiData = data.response[0];
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error loading API data', error);
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }

}
