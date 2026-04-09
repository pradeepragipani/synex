import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { featureOne } from '../../../data/data';
import { PartnerOne } from "../../../components/partner/partner-one/partner-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    CarouselModule,
    PartnerOne,
    FooterOne
],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  isLoading: boolean = false;
  apiData: any;

  constructor(
    private cdr: ChangeDetectorRef,
    private apiService: ApiService
  ) {}

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
        console.error('Error loading API data', error);
        this.isLoading = false;
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }

  open:boolean = false

  feature = featureOne

  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    items:1,
    dots:true
  }
}
