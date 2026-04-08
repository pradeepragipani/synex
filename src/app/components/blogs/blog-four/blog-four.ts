import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogData } from '../../../data/data';
import { RouterLink } from '@angular/router';

interface BlogData{
    id: number;
    image: string;
    date: string;
    tag: string;
    title: string;
    desc: string;
}

@Component({
  selector: 'app-blog-four',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-four.html',
  styleUrl: './blog-four.css'
})
export class BlogFour {
  blogData:BlogData[] = blogData
} 
