import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
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
  selector: 'app-blog-tag',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './blog-tag.html',
  styleUrl: './blog-tag.css'
})
export class BlogTag {

  ngOnInit(): void {
    Aos.init()
  }

  blogData:BlogData[] = blogOneData
}
