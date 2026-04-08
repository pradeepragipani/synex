import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switcher',
  imports: [
    CommonModule
  ],
  templateUrl: './switcher.html',
  styleUrl: './switcher.css'
})
export class Switcher {
   changeMode(mode:any, event:any) {
    switch (mode) {
        case 'mode':
            if (document.documentElement.className.includes("dark")) {
                document.documentElement.className = 'light'
            } else {
                document.documentElement.className = 'dark'
            }
            break;
    }
}
}
