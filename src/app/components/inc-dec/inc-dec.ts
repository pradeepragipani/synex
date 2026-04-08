import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inc-dec',
  imports: [
    CommonModule,

  ],
  templateUrl: './inc-dec.html',
  styleUrl: './inc-dec.css'
})
export class IncDec {
  value:number = 0 

  dec=()=>{
    if(this.value > 0){
      this.value = this.value - 1 
    }
  }
  inc = () => {
    this.value = this.value + 1
  }
}
