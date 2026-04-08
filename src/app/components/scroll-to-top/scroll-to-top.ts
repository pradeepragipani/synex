import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  imports: [
    CommonModule
  ],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.css'
})
export class ScrollToTop {
  scroll:boolean = false
  @HostListener("window:scroll",[])

  ngOnInit(): void {
    if(window.scrollY > 50){
      this.scroll = true
    }else{
      this.scroll = false
    }
  }

  topFunction(e:any){
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
