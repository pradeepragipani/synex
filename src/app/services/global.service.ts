import { Injectable, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    private loggedInUser$ = new BehaviorSubject<any>(null);
    loggedInUserObservable: Observable<any> = this.loggedInUser$.asObservable();
    private cartItems$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    cartItemsObservable: Observable<any[]> = this.cartItems$.asObservable();

    constructor(
        private toastr: ToastrService
    ){
        const user = localStorage.getItem('user');
        if (user) {
            this.loggedInUser$.next(JSON.parse(user));
        }
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        if (cartItems.length > 0) {
            this.cartItems$.next(cartItems);
        }
    }

    userLogin(user: any) {
        this.loggedInUser$.next(user);
    }

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('userLoginData');
        localStorage.removeItem('addresses');
        localStorage.removeItem('defaultAddress');
        localStorage.removeItem('selectedAddress');
        this.loggedInUser$.next(null);
        window.location.href = '/';
        setTimeout(() => {
            localStorage.removeItem('cartItems');
            this.cartItems$.next([]);
            window.location.reload();
        }, 500);
    }

    getCurrentUser() {
        return this.loggedInUser$.value;
    }

    addToCart(item: any): void {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const existingItemIndex = cartItems.findIndex((cartItem: any) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += 1;
        } else {
            cartItems.push({ ...item, quantity: 1 });
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.cartItems$.next(cartItems);
    }
    updateCartItem(item: any): void {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const itemIndex = cartItems.findIndex((cartItem: any) => cartItem.id === item.id);
        if (itemIndex !== -1) {
            cartItems[itemIndex] = item;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            this.cartItems$.next(cartItems);
        }
    }
    removeFromCart(item: any): void {
        let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        cartItems = cartItems.filter((cartItem: any) => cartItem.id !== item.id);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        this.cartItems$.next(cartItems);
    }
    clearCart(): void {
        localStorage.removeItem('cartItems');
        this.cartItems$.next([]);
    }

    success(msg: string, header?: string): void {
        this.toastr.success(msg, header || 'Success');
    }
    error(msg: string, header?: string): void {
        this.toastr.error(msg, header || 'Error');
    }
    info(msg: string, header?: string): void {
        this.toastr.info(msg, header || 'Info');
    }
    warning(msg: string, header?: string): void {
        this.toastr.warning(msg, header || 'Warning');
    }

}