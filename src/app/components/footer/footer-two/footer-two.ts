import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerLink1, footerLink2, footerLink3, footerLink4 } from '../../../data/nav-data';

@Component({
  selector: 'app-footer-two',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './footer-two.html',
  styleUrl: './footer-two.css'
})
export class FooterTwo {

  footerLink1 = footerLink1;
  footerLink2 = footerLink2;
  footerLink3 = footerLink3;
  footerLink4 = footerLink4;

  year:any

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.year = new Date().getFullYear()
  }

}
