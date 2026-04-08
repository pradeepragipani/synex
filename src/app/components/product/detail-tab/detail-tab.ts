import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {detailReview, shippingAbout, venderInfo} from '../../../data/data'

interface VanderInfo{
  name: string;
  vendor: string;
  shop: string;
  mail: string;
  call: string;
}
interface DetailReview{
  name: string;
  desc: string;
}

interface ShippingAbout{
    title: string;
    desc: string;
}

@Component({
  selector: 'app-detail-tab',
  imports: [
    CommonModule,

  ],
  templateUrl: './detail-tab.html',
  styleUrl: './detail-tab.css'
})
export class DetailTab {

  activeTab:number = 1

  vanderInfo:VanderInfo[] = venderInfo

  detailReview:DetailReview[] = detailReview

  shippingAbout:ShippingAbout[] = shippingAbout

}
