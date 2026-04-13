import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarOne,
    FooterOne
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {

  isLoading: boolean = false;
  apiData: any[] = [];

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
    this.apiService.postData('getfaqs', { "hflag": "S" }).subscribe({
      next: (data) => {
        this.isLoading = false;
        this.apiData = data?.response || [];
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
  activeIndex: number = 0
  activeIndex2: number = 0
  activeIndex3: number = 0
  activeIndex4: number = 0

  onTabClick = (index: any) => {
    if (this.activeIndex === index) {
      this.activeIndex = 0
    } else { this.activeIndex = index }
  }
  onTabClick2 = (index: any) => {
    if (this.activeIndex2 === index) {
      this.activeIndex2 = 0
    } else { this.activeIndex2 = index }
  }
  onTabClick3 = (index: any) => {
    if (this.activeIndex3 === index) {
      this.activeIndex3 = 0
    } else { this.activeIndex3 = index }
  }
  onTabClick4 = (index: any) => {
    if (this.activeIndex4 === index) {
      this.activeIndex4 = 0
    } else { this.activeIndex4 = index }
  }


}
