import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogTwoData } from '../../../data/data';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

interface BlogData {
    id: number;
    image: string;
    date: string;
    tag: string;
    title: string;
    desc: string;
    
}

@Component({
  selector: 'app-blog-two',
  imports: [
    CommonModule,
    CarouselModule,
    RouterLink
  ],
  templateUrl: './blog-two.html',
  styleUrl: './blog-two.css'
})
export class BlogTwo {
  blogData = blogTwoData

  customOptions = {
    loop: true,
    margin: 30,
    nav: false,
    items:1,
    dots:true,
    autoplay:true,
    responsive:{
      0:{items:1}
    }
  }

} 
