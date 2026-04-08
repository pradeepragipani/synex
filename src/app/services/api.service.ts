import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EncryptDecryptService } from './encrypt-decrypt.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient,
        private encryptDecryptService: EncryptDecryptService
    ) { }

    getData(endpoint: string): Observable<any> {
        let headers = {
            Ldatetime: this.encryptDecryptService.set("2020-01-01 00:00:00"),
            Tokenid: this.encryptDecryptService.set("9999999999numbermall"),
            Sessionid: this.encryptDecryptService.set("8888888888----<-1000"),
        };
        return this.http.get(`${environment.apiUrl}/${endpoint}`, { headers });
    }

    postData(endpoint: string, data: any): Observable<any> {
        let headers = {
            Ldatetime: this.encryptDecryptService.set("2020-01-01 00:00:00"),
            Tokenid: this.encryptDecryptService.set("9999999999numbermall"),
            Sessionid: this.encryptDecryptService.set("8888888888----<-1000"),
        };
        return this.http.post(`${environment.apiUrl}/${endpoint}`, data, { headers });
    }

    postDataWithHeaders(endpoint: string, data: any, headers: any): Observable<any> {
        return this.http.post(`${environment.apiUrl}/${endpoint}`, data, { headers });
    }

    // Add more methods as needed
}