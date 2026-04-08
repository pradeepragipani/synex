import { ChangeDetectorRef, Component } from '@angular/core';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AccountTab } from "../../../components/account-tab/account-tab";
import Aos from 'aos';
import { cartData } from '../../../data/data';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { GlobalService } from '../../../services/global.service';
import { ApiService } from '../../../services/api.service';
import { EncryptDecryptService } from '../../../services/encrypt-decrypt.service';

interface Data{
  image: string;
  tag: string;
  name: string;
  price: string;
  status: string;
}
@Component({
  selector: 'app-order-history',
  imports: [
    CommonModule,
    RouterLink,
    NavbarOne,
    AccountTab,
    FooterOne
],
  templateUrl: './order-history.html',
  styleUrl: './order-history.css'
})
export class OrderHistory {

  cartData:Data[] = cartData;
  user: any = JSON.parse(localStorage.getItem('user') || '{}');
  userData: any = JSON.parse(localStorage.getItem('userLoginData') || '{}');
  isLoading: boolean = false;
  ordersList: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private globalService: GlobalService,
    private apiService: ApiService,
    private encryptService: EncryptDecryptService,
  ) { }

  ngOnInit(): void {
    Aos.init();
    this.getUserOrders();
  }

  getUserOrders(): void {
    this.isLoading = true;
    if (!this.userData || !this.userData.id) {
      this.globalService.error("Session expired. Please login again.");
      this.globalService.logout();
      return
    };
    this.apiService.postDataWithHeaders(
      '/getUserOrders',
      { userid: this.userData.id, astatus: "1" },
      {
        Ldatetime: this.encryptService.set(this.userData.ldatetime),
        Tokenid: this.encryptService.set(this.userData.tokenid),
        Sessionid: this.userData.sessionid,
      }
    ).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response.code === 0) {
          this.ordersList = response.response;
          this.cdr.detectChanges();
        } else if (response.code === 5) {
          this.globalService.error("Session expired. Please login again.");
          this.globalService.logout();
        }
      }, error: (error) => {
        this.isLoading = false;
        console.error('Error loading addresses', error);
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }
  checkPaymentStatus(referenceId: any): void {
    this.isLoading = true;
    if (!this.userData || !this.userData.id) {
      this.globalService.error("Session expired. Please login again.");
      this.globalService.logout();
      return
    };
    this.apiService.postDataWithHeaders(
      '/checkPaymentStatus',
      { referenceId: referenceId },
      {
        Ldatetime: this.encryptService.set(this.userData.ldatetime),
        Tokenid: this.encryptService.set(this.userData.tokenid),
        Sessionid: this.userData.sessionid,
      }
    ).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        if (response.code === 0) {
          this.ordersList = response.response;
          this.cdr.detectChanges();
        } else if (response.code === 5) {
          this.globalService.error("Session expired. Please login again.");
          this.globalService.logout();
        }
      }, error: (error) => {
        this.isLoading = false;
        console.error('Error loading addresses', error);
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }

}
