import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-layout-one',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './layout-one.html',
  styleUrl: './layout-one.css'
})
export class LayoutOne {

  @Input() productList: any[] = [];
  @Input() classList: any;

  constructor(
    private router: Router,
    private globalService: GlobalService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productList']) {
      this.productList = changes['productList'].currentValue;
    }
  }

  toProductDetails(item: any): void {
    localStorage.setItem('productData', JSON.stringify(item));
    localStorage.setItem('relatedProducts', JSON.stringify(this.productList.slice(0, 4)));
    this.router.navigate(['/product-details', item.id]);
  }

  addToCart(item: any): void {
    this.globalService.addToCart(item);
  }
  removeFromCart(item: any): void {
    this.globalService.removeFromCart(item);
  }

}
