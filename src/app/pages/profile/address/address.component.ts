import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavbarOne } from '../../../components/navbar/navbar-one/navbar-one';
import { FooterOne } from '../../../components/footer/footer-one/footer-one';
import { GlobalService } from '../../../services/global.service';
import { ApiService } from '../../../services/api.service';
import { EncryptDecryptService } from '../../../services/encrypt-decrypt.service';
import Aos from 'aos';
import { AccountTab } from '../../../components/account-tab/account-tab';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NavbarOne,
    FooterOne,
    AccountTab
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  isLoading: boolean = false;
  user: any = JSON.parse(localStorage.getItem('user') || '{}');
  userData: any = JSON.parse(localStorage.getItem('userLoginData') || '{}');
  isLoggedIn: boolean = false;
  showAddAddressPopup: boolean = false;
  isAddressLoading: boolean = false;
  statesList: any[] = [];
  addressForm!: FormGroup;
  addresses: any[] = [];

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
          this.cdr.detectChanges();
        } else if (response.code === 5) {
          this.globalService.error("Session expired. Please login again.");
          this.globalService.logout();
        } else {
          this.globalService.error(response.message || 'Unable to add address at this time.');
        }
      }, error: (error) => {
        this.isLoading = false;
        console.error('Error loading addresses', error);
      }, complete: () => {
        this.isLoading = false;
      }
    });
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
        } else if (response.code === 5) {
          this.globalService.error("Session expired. Please login again.");
          this.globalService.logout();
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

}
