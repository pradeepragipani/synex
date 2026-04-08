import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productList } from '../../../data/data';

@Component({
  selector: 'app-best-seller',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './best-seller.html',
  styleUrl: './best-seller.css'
})
export class BestSeller {
  activeTab = 1
  productList = productList
}
