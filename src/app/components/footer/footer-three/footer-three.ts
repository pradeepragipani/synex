import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerLink1, footerLink2, footerLink3, footerLink4 } from '../../../data/nav-data';

@Component({
  selector: 'app-footer-three',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-three.html',
  styleUrl: './footer-three.css'
})
export class FooterThree {
  year:any
  
  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }

  footerLink1 = footerLink1
  footerLink2 = footerLink2
  footerLink3 = footerLink3
  footerLink4 = footerLink4
}

