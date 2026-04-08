import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { blogCategory, blogTag, comments, popularTag, recentPost, recentPostTwo } from '../../../data/blog';
import { BlogOne } from "../../../components/blogs/blog-one/blog-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface RecentPost{
  name: string;
  image: string;
  date: string;
  tag: string;
  title: string;
}

@Component({
  selector: 'app-blog-details-v3',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    BlogOne,
    FooterOne
],
  templateUrl: './blog-details-v3.html',
  styleUrl: './blog-details-v3.css'
})
export class BlogDetailsV3 {
  ngOnInit(): void {
    Aos.init()
  }

  blogTag = blogTag
  
  recentPost:RecentPost[] = recentPost

  comments = comments

  blogCategory = blogCategory

  recentPostTwo = recentPostTwo

  popularTag = popularTag

  
}
