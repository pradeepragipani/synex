import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Switcher } from "../../../components/switcher/switcher";
import Aos from 'aos';

@Component({
  selector: 'app-coming-soon',
  imports: [
    CommonModule,
    RouterLink,
    Switcher
],
  templateUrl: './coming-soon.html',
  styleUrl: './coming-soon.css'
})
export class ComingSoon {

 date:any = ''
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private timer: any;
  private targetDate = new Date('2026-12-31T23:59:59').getTime();

   ngOnInit(): void {
    this.date = new Date().getFullYear();
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

   ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      clearInterval(this.timer);
      return;
    }

    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }
 
  
}
