import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData } from '../../../data/index-five';
import { CarouselComponent, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog-five',
  imports: [
    CommonModule,
    RouterLink,
    CarouselModule
  ],
  templateUrl: './blog-five.html',
  styleUrl: './blog-five.css'
})
export class BlogFive {
  blogData = blogData

  customOptions = {
    loop: true,
    margin: 10,
    nav: false,
    items:1,
    dots:true,
    responsive:{
      0:{items:1}
    }
  }
}
