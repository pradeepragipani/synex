import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { BlogThree } from "../../../components/blogs/blog-three/blog-three";
import { blogOneData } from '../../../data/blog';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface BlogData{
  id: number;
  image: string;
  date: string;
  tag: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-blog-v2',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    BlogThree,
    FooterOne
],
  templateUrl: './blog-v2.html',
  styleUrl: './blog-v2.css'
})
export class BlogV2 {
  ngAfterViewInit(): void {
    Aos.init()
  }
  
  blogData:BlogData[] = blogOneData
}
