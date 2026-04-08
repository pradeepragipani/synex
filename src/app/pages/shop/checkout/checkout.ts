import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { GlobalService } from '../../../services/global.service';
import { ApiService } from '../../../services/api.service';
import { EncryptDecryptService } from '../../../services/encrypt-decrypt.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NavbarOne,
    FooterOne
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  showCoupon: boolean = false;

  isLoading: boolean = false;
  checkoutDisable: boolean = false;
  user: any = JSON.parse(localStorage.getItem('user') || '{}');
  userData: any = JSON.parse(localStorage.getItem('userLoginData') || '{}');
  isLoggedIn: boolean = false;
  cartItem: boolean = false;
  cartItems: any[] = [];
  cartTotal: number = 0;

  addresses: any[] = [];
  defaultAddress: any = null;
  selectedAddress: any = null;

  deliveryNote: string = '';
  orderId: string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private globalService: GlobalService,
    private apiService: ApiService,
    private encryptService: EncryptDecryptService,
  ) { }

  ngOnInit(): void {
    Aos.init();
    this.getAddress();
    this.globalService.loggedInUserObservable.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.globalService.cartItemsObservable.subscribe(items => {
      this.cartItem = items.length > 0;
      this.cartItems = items;
      this.cartTotal = items.reduce((total, item) => total + (item.scost * item.quantity), 0);
    });
    // this.addresses = JSON.parse(localStorage.getItem('addresses') || '[]');
    // this.defaultAddress = JSON.parse(localStorage.getItem('defaultAddress') || 'null');
  }

  getAddress(): void {
    this.isLoading = true;
    if (!this.userData || !this.userData.id) return;
    this.apiService.postDataWithHeaders(
      '/getUserAddress',
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
          const addresses = response.response.reverse();
          this.addresses = addresses;
          this.selectedAddress = addresses.find((a: any) => a.isdefault === "1") || null;
          this.cdr.detectChanges();
        }
      }, error: (error) => {
        this.isLoading = false;
        console.error('Error loading addresses', error);
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }

  isSelected(address: any): boolean {
    return this.selectedAddress ? this.selectedAddress.id === address.id : this.defaultAddress && this.defaultAddress.id === address.id;
  }
  selectAddress(address: any) {
    this.selectedAddress = address;
  }
  isAddressSelected(item: any) {
    return this.selectedAddress && this.selectedAddress.id === item.id;
  }

  getCartCount(cartItems: any[]): number {
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
      total += parseInt(cartItems[i].quantity, 10);
    }

    return total;
  }

  handleOrder(): void {

    this.checkoutDisable = true;
    let orderDetails = this.cartItems.map((item) => ({
        itemid: item.id,
        quantity: item.quantity,
        pcost: item.pcost,
        fcost: item.fcost,
        dcost: item.fcost - item.scost,
        scost: item.scost,
        iunits: item.iunits
    }));
    let discountCost = this.cartItems.reduce((total, item) => total + ((item.fcost - item.scost) * item.quantity), 0);

    const order = {
      userid: this.user.customer ? this.user.customer.id : this.user.userid,
      id: "0",
      netcost: this.cartTotal.toString(),
      itemscost: this.cartTotal.toString(),
      orgid: "0",
      noofitems: this.getCartCount(this.cartItems).toString(),
      ostatus: "NEW",
      pstatus: "PENDING",
      remarks: this.deliveryNote,
      // discountcost: this.dTotal.toString(),
      discountcost: discountCost.toString(),
      addressid: this.selectedAddress.id,
      // deliverydate: this.dDetails.deliverydate,
      // deliveryby: this.payment,
      // orderdetails: this.orderDetails,
      deliverydate: 14, // default 2 weeks delivery
      deliveryby: 'Self',
      orderdetails: orderDetails,
      orderfrom: "Web",
      // deliverycharges: this.dDetails.deliverycharges,
      deliverycharges: '10',
      createdby: this.user.userid,
      coupon_percentage: 0,
      coupon_discount: 0,
      coupon_code: 0
    };

    this.apiService.postDataWithHeaders('/addOrderMasterLatest', order, {
      Ldatetime: this.encryptService.set(this.userData.ldatetime),
      Tokenid: this.encryptService.set(this.userData.tokenid),
      Sessionid: this.userData.sessionid,
    }).subscribe((res: any) => {
      if (res.code === 0) {
        this.orderId = res.response;

        const paymentData = {
          amt: this.cartTotal.toString(),
          userid: this.user.userid,
          name: this.user.userName,
          mobile: this.user.mobileNumber,
          orderid: res.response
        };
        this.apiService.postDataWithHeaders('/addPayment', paymentData, {
          Ldatetime: this.encryptService.set(this.userData.ldatetime),
          Tokenid: this.encryptService.set(this.userData.tokenid),
          Sessionid: this.userData.sessionid,
        }).subscribe((payRes: any) => {
          if (payRes.code === 0) {
            alert(payRes.message);
            this.globalService.clearCart();
            this.router.navigate(['/qr-payment'], {
              queryParams: {
                qrCode: res.shortURL,
                message: res.message,
                referenceId: res.referenceId
              }
            });
          } else {
            alert('Payment failed. Try again');
          }
        });
      } else if (res.code === 5) {
        // this.globalService.logout();
        // this.router.navigate(['/login']);
        // alert("Session expired. Please login again.");
      } else {
        alert("Something Went Wrong. Please Try Again");
      }
    });
  }

}
