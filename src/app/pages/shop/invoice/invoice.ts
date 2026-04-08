import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Switcher } from "../../../components/switcher/switcher";

@Component({
  selector: 'app-invoice',
  imports: [
    CommonModule,
    RouterLink,
    Switcher
],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css'
})
export class Invoice {

}
