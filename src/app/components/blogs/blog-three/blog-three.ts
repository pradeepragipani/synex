import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogData } from '../../../data/index-three';
import { RouterLink } from '@angular/router';

interface BlogData{
    image: string;
    date: string;
    tag: string;
    title: string;
}

@Component({
  selector: 'app-blog-three',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-three.html',
  styleUrl: './blog-three.css'
})
export class BlogThree {
  blogData:BlogData[] = blogData
}
