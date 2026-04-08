import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { ApiService } from '../../../services/api.service';
import { GlobalService } from '../../../services/global.service';
import { NavbarOne } from '../../../components/navbar/navbar-one/navbar-one';

@Component({
  selector: 'app-qr-payment',
  standalone: true,
  imports: [ RouterLink, QRCodeComponent, NavbarOne ],
  templateUrl: './qr-payment.component.html',
  styleUrl: './qr-payment.component.css'
})
export class QrPaymentComponent implements OnInit, OnDestroy {

  timer: string = '00:00:00';
  qrCodeStr: string = '';
  pageTitle: string = '';

  private intervalId: any;

  user: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {

    // get user from store
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    this.route.queryParams.subscribe(params => {
      if (params['qrCode']) {
        this.qrCodeStr = params['qrCode'];
        this.pageTitle = params['message'] || 'Scan QR Code to Pay';
        this.startCountdown(60);
        // After 60 seconds check transaction
        setTimeout(() => {
          this.checkTransactionStatus();
        }, 60000);
      } else {
        alert("Invalid Payment QR Code");
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startCountdown(seconds: number) {
    let remaining = seconds;

    this.intervalId = setInterval(() => {

      const hrs = Math.floor(remaining / 3600);
      const mins = Math.floor((remaining % 3600) / 60);
      const secs = remaining % 60;

      this.timer =
        this.format(hrs) + ':' +
        this.format(mins) + ':' +
        this.format(secs);

      if (remaining <= 0) {
        clearInterval(this.intervalId);
      }

      remaining--;

    }, 1000);
  }

  format(val: number): string {
    return val > 9 ? val.toString() : '0' + val;
  }

  checkTransactionStatus() {
    const data = {
      userid: this.user?.userid
    };
    this.apiService.postData('/getTransactionStatus', data).subscribe((res: any) => {
      if (res && res.code === 0) {
        alert(res.message); // replace with toastr
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
