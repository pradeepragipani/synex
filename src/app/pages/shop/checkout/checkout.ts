import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { GlobalService } from '../../../services/global.service';
import { ApiService } from '../../../services/api.service';
import { EncryptDecryptService } from '../../../services/encrypt-decrypt.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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

  showAddAddressPopup: boolean = false;
  isAddressLoading: boolean = false;
  statesList: any[] = [];
  addressForm!: FormGroup;

  deliveryNote: string = '';
  orderId: string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
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
    if (!this.userData || !this.userData.id) {
      this.globalService.error("Session expired. Please login again.");
      this.globalService.logout();
      return
    };
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

  isSelected(address: any): boolean {
    return this.selectedAddress ? this.selectedAddress.id === address.id : this.defaultAddress && this.defaultAddress.id === address.id;
  }
  selectAddress(address: any) {
    this.selectedAddress = address;
  }

  getStates(): void {
    this.apiService.postData('getStates', {}).subscribe({
      next: (response: any) => {
        if (response.code === 0) {
          this.statesList = response.response;
        }
      },
      error: (error) => {
        console.error('Error loading states list', error);
        // this.globalService.error('Error loading states list. Please try again later.');
      }
    });
  }

  initForms() {
    this.addressForm = this.fb.group({
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      village: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
    });
  }

  toggleAddAddressPopup(): void {
    this.getStates();
    this.showAddAddressPopup = !this.showAddAddressPopup;
    if (this.showAddAddressPopup) {
      this.initForms();
    }
  }

  closeAddAddressPopup(): void {
    this.showAddAddressPopup = false;
  }

  saveAddress(): void {
    if (this.addressForm.invalid) {
      this.globalService.error('Please enter all mandatory fields');
      return;
    }
    if (!this.user || !this.user.userid) {
      this.globalService.error('Unable to save address. Please login again.');
      return;
    }

    let formControls = this.addressForm.controls;
    const payload = {
      userid: this.user.userid,
      uname: null,
      address1: formControls['address1'].value,
      address2: formControls['address2'].value,
      village: formControls['village'].value,
      ucity: formControls['city'].value,
      ustate: formControls['state'].value,
      ucountry: "India",
      pincode: formControls['pincode'].value,
      isdefault: "1",
      astatus: "0",
      id: "0",
      longitude: "0",
      latitude: "0",
    };

    this.isAddressLoading = true;
    this.apiService.postDataWithHeaders(
      '/addUserAddress',
      payload,
      {
        Ldatetime: this.encryptService.set(this.userData.ldatetime),
        Tokenid: this.encryptService.set(this.userData.tokenid),
        Sessionid: this.userData.sessionid,
      }
    ).subscribe({
      next: (response: any) => {
        this.isAddressLoading = false;
        if (response.code === 0) {
          this.closeAddAddressPopup();
          this.getAddress();
        } else {
          this.globalService.error(response.message || 'Unable to add address at this time.');
        }
      },
      error: (error) => {
        this.isAddressLoading = false;
        console.error('Error adding address', error);
        this.globalService.error('Error adding address. Please try again.');
      },
      complete: () => {
        this.isAddressLoading = false;
      }
    });
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
            this.globalService.success(payRes.message);
            this.globalService.clearCart();
            this.router.navigate(['/qr-payment'], {
              queryParams: {
                qrCode: payRes.shortURL,
                message: payRes.message,
                referenceId: payRes.referenceId
              }
            });
          } else {
            this.globalService.error('Payment failed. Try again');
          }
        });
      } else if (res.code === 5) {
        // this.globalService.logout();
        // this.router.navigate(['/login']);
        // this.globalService.error("Session expired. Please login again.");
      } else {
        this.globalService.error("Something Went Wrong. Please Try Again");
      }
    });
  }

}
