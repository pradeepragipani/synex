import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData } from '../../../data/data';



interface BlogData{
    id: number;
    image: string;
    date: string;
    tag: string;
    title: string;
    desc: string;
}

@Component({
  selector: 'app-blog-one',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-one.html',
  styleUrl: './blog-one.css'
})
export class BlogOne {
  blogData = blogData
}
