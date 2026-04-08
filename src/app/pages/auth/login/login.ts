import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { EncryptDecryptService } from '../../../services/encrypt-decrypt.service';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NavbarOne,
    FooterOne
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  
  isLoading: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private encryptService: EncryptDecryptService,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    Aos.init();
    this.initForms();
  }

  initForms() {
    this.loginForm = this.fb.group({
      cnumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', Validators.required]
    });
  }

  // ---------------- LOGIN ----------------
  handleLogin() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    const { cnumber, password } = this.loginForm.value;
    this.apiService.postData('/login', {
      cnumber: this.encryptService.set(cnumber),
      upassword: this.encryptService.set(password),
      logged_from: 'Web',
      version_no: '0.0'
    }).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res.code === 0) {
          const userData = res.response[0];

          localStorage.setItem("Tokenid", this.encryptService.set(userData.tokenid));
          localStorage.setItem("Sessionid", this.encryptService.set(userData.sessionid));
          localStorage.setItem("Ldatetime", this.encryptService.set(userData.ldatetime));

          let user: any;

          if (userData.roleid === "11" || userData.roleid === "12") {
            user = {
              userid: userData.id,
              userName: this.encryptService.set(userData.name),
              mobileNumber: this.encryptService.set(userData.cnumber),
              userEmail: userData.emailid,
              roleid: userData.roleid,
              loggedIn: true
            };

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("userLoginData", JSON.stringify(userData));
            this.globalService.userLogin(user);
            this.router.navigate(['/searchuser']);

          } else {

            user = {
              userid: userData.id,
              userName: this.encryptService.get(userData.name),
              mobileNumber: this.encryptService.get(userData.cnumber),
              userEmail: userData.emailid,
              roleid: userData.roleid,
              walletBalance: userData.wallet_balance,
              loggedIn: true
            };

            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("userLoginData", JSON.stringify(userData));
            this.globalService.userLogin(user);

            // this.apiService.postDataWithHeaders(
            //   '/getUserAddress',
            //   { userid: userData.id, astatus: "1" }
            //   , {
            //     Ldatetime: this.encryptService.set(userData.ldatetime),
            //     Tokenid: this.encryptService.set(userData.tokenid),
            //     Sessionid: this.encryptService.set(userData.sessionid),
            //   })
            //   .subscribe((response: any) => {
            //     if (response.code === 0) {
            //       const addresses = response.response.reverse();
            //       localStorage.setItem("addresses", JSON.stringify(addresses));

            //       const defaultAddr = addresses.filter((a: any) => a.isdefault === "1");
            //       localStorage.setItem("defaultAddress", JSON.stringify(defaultAddr));
            //       localStorage.setItem("selectedAddress", JSON.stringify(defaultAddr));
            //     }
            //   });

            this.router.navigate(['/']);
          }

        } else if (res.code === 4) {
          // this.store.showModal('otp');
        } else {
          alert(res.message);
        }
      }, error: (error: any) => {
        this.isLoading = false;
        alert('An error occurred. Please try again.');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  // ---------------- UI HELPERS ----------------
  viewPassword(input: HTMLInputElement) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
