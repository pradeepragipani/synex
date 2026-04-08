import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarOne } from "../../../components/navbar/navbar-one/navbar-one";
import Aos from 'aos';
import { FooterOne } from "../../../components/footer/footer-one/footer-one";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EncryptDecryptService } from '../../../services/encrypt-decrypt.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NavbarOne,
    FooterOne
],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  isLoading: boolean = false;
  registerForm!: FormGroup;
  passwdStrength = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private encryptService: EncryptDecryptService,
  ) { }

  ngOnInit(): void {
    Aos.init();
    this.initForms();
  }

  initForms() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cnumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  passwordsMismatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password && confirmPassword && password !== confirmPassword;
  }

  // ---------------- REGISTER ----------------
  handleRegister() {
    if (this.registerForm.invalid) return;

    this.isLoading = true;
    const { name, password, cnumber } = this.registerForm.value;
    this.apiService.postData('userRegistration', {
      name: this.encryptService.set(name),
      upassword: this.encryptService.set(password),
      cnumber: this.encryptService.set(cnumber)
    }).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res.code === 0) {
          alert(res.message);
          this.registerForm.reset();
          this.router.navigate(['/login']);
        } else {
          alert(res.message);
        }
      }, error: (err) => {
        this.isLoading = false;
        alert('An error occurred. Please try again.');
        console.error('Registration error:', err);
      }, complete: () => {
        this.isLoading = false;
      }
    });
  }

  // ---------------- PASSWORD CHECK ----------------
  passwordCheck(passwd: string) {
    const upper = /[A-Z]/.test(passwd);
    const lower = /[a-z]/.test(passwd);
    const number = /[0-9]/.test(passwd);
    const special = /[!@#$%^&*?_~]/.test(passwd);

    this.passwdStrength = !(passwd.length > 7 && upper && lower && number && special);

    this.registerForm.patchValue({ password: passwd });
  }

  // ---------------- UI HELPERS ----------------
  viewPassword(input: HTMLInputElement) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
