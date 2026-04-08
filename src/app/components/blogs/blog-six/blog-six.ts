import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData2 } from '../../../data/index-five';

@Component({
  selector: 'app-blog-six',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-six.html',
  styleUrl: './blog-six.css'
})
export class BlogSix {

  blogData = blogData2

}
