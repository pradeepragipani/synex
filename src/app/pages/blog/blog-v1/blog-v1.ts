import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { BlogTwo } from "../../../components/blogs/blog-two/blog-two";
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
  selector: 'app-blog-v1',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    BlogTwo,
    FooterOne
],
  templateUrl: './blog-v1.html',
  styleUrl: './blog-v1.css'
})
export class BlogV1 {
  ngOnInit(): void {
    Aos.init()
  }

  blogData:BlogData[] = blogOneData
}
