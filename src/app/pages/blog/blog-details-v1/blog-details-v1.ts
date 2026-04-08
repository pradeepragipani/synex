import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { blogOneData, blogTag, comments, recentPost } from '../../../data/blog';
import { BlogOne } from "../../../components/blogs/blog-one/blog-one";
import { FooterOne } from "../../../components/footer/footer-one/footer-one";

interface RecentPost{
  name: string;
    image: string;
    date: string;
    tag: string;
    title: string;
}

interface Comments{
    image: string;
    name: string;
    decs: string;
}

@Component({
  selector: 'app-blog-details-v1',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    BlogOne,
    FooterOne
],
  templateUrl: './blog-details-v1.html',
  styleUrl: './blog-details-v1.css'
})
export class BlogDetailsV1 {
 

  blogTag = blogTag

  recentPost:RecentPost[] = recentPost

  comments:Comments[] = comments

  data:any
  id:any

  constructor(private Router:ActivatedRoute){}

  ngAfterViewInit(): void {
    Aos.init()
    this.id = this.Router.snapshot.params['id']
    this.data = blogOneData.find((item)=>item.id === parseInt(this.id))
    
  }
  
}
