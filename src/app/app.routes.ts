import { Routes } from '@angular/router';
import { IndexOne } from './pages/index/index-one/index-one';
import { IndexTwo } from './pages/index/index-two/index-two';
import { IndexThree } from './pages/index/index-three/index-three';
import { IndexFour } from './pages/index/index-four/index-four';
import { IndexFive } from './pages/index/index-five/index-five';
import { IndexSix } from './pages/index/index-six/index-six';
import { About } from './pages/inner-pages/about/about';
import { Pricing } from './pages/inner-pages/pricing/pricing';
import { Team } from './pages/inner-pages/team/team';
import { OurClients } from './pages/inner-pages/our-clients/our-clients';
import { TermsAndConditions } from './pages/inner-pages/terms-and-conditions/terms-and-conditions';
import { Faq } from './pages/inner-pages/faq/faq';
import { PortfolioV1 } from './pages/portfolio/portfolio-v1/portfolio-v1';
import { PortfolioV2 } from './pages/portfolio/portfolio-v2/portfolio-v2';
import { PortfolioV3 } from './pages/portfolio/portfolio-v3/portfolio-v3';
import { PortfolioDetailsV1 } from './pages/portfolio/portfolio-details-v1/portfolio-details-v1';
import { PortfolioDetailsV2 } from './pages/portfolio/portfolio-details-v2/portfolio-details-v2';
import { Error } from './pages/special/error/error';
import { ComingSoon } from './pages/special/coming-soon/coming-soon';
import { ThankYou } from './pages/special/thank-you/thank-you';
import { MyProfile } from './pages/profile/my-profile/my-profile';
import { MyAccount } from './pages/profile/my-account/my-account';
import { EditAccount } from './pages/profile/edit-account/edit-account';
import { OrderHistory } from './pages/profile/order-history/order-history';
import { Wishlist } from './pages/profile/wishlist/wishlist';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { ForgerPassword } from './pages/auth/forger-password/forger-password';
import { ShippingMethod } from './pages/shop/shipping-method/shipping-method';
import { PaymentMethod } from './pages/shop/payment-method/payment-method';
import { Invoice } from './pages/shop/invoice/invoice';
import { PaymentConfirmation } from './pages/shop/payment-confirmation/payment-confirmation';
import { PaymentSuccess } from './pages/shop/payment-success/payment-success';
import { PaymentFailure } from './pages/shop/payment-failure/payment-failure';
import { Cart } from './pages/shop/cart/cart';
import { Checkout } from './pages/shop/checkout/checkout';
import { ShopV1 } from './pages/shop/shop-v1/shop-v1';
import { ShopV2 } from './pages/shop/shop-v2/shop-v2';
import { ShopV3 } from './pages/shop/shop-v3/shop-v3';
import { ShopV4 } from './pages/shop/shop-v4/shop-v4';
import { ProductDetails } from './pages/shop/product-details/product-details';
import { BlogV1 } from './pages/blog/blog-v1/blog-v1';
import { BlogV2 } from './pages/blog/blog-v2/blog-v2';
import { BlogDetailsV1 } from './pages/blog/blog-details-v1/blog-details-v1';
import { BlogDetailsV2 } from './pages/blog/blog-details-v2/blog-details-v2';
import { BlogDetailsV3 } from './pages/blog/blog-details-v3/blog-details-v3';
import { BlogTag } from './pages/blog/blog-tag/blog-tag';
import { Contact } from './pages/inner-pages/contact/contact';
import { ProductCategory } from './pages/shop/product-category/product-category';
import { QrPaymentComponent } from './pages/shop/qr-payment/qr-payment.component';
import { AddressComponent } from './pages/profile/address/address.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    // {path:'', component:IndexOne},
    {path:'index-v1', component:IndexOne},
    {path:'index-v2', component:IndexTwo},
    {path:'index-v3', component:IndexThree},
    {path:'index-v4', component:IndexFour},
    {path:'index-v5', component:IndexFive},
    {path:'index-v6', component:IndexSix},
    {path:'home', component:IndexSix},
    {path:'about', component:About},
    {path:'pricing', component:Pricing},
    {path:'team', component:Team},
    {path:'our-clients', component:OurClients},
    {path:'terms-and-conditions', component:TermsAndConditions},
    {path:'faq', component:Faq},
    {path:'portfolio-v1', component:PortfolioV1},
    {path:'portfolio-v2', component:PortfolioV2},
    {path:'portfolio-v3', component:PortfolioV3},
    {path:'portfolio-details-v1', component:PortfolioDetailsV1},
    {path:'portfolio-details-v1/:id', component:PortfolioDetailsV1},
    {path:'portfolio-details-v2', component:PortfolioDetailsV2},
    {path:'portfolio-details-v2/:id', component:PortfolioDetailsV2},
    {path:'error', component:Error},
    {path:'coming-soon', component:ComingSoon},
    {path:'thank-you', component:ThankYou},
    {path:'my-profile', component:MyProfile},
    {path:'my-account', component:MyAccount},
    {path:'edit-account', component:EditAccount},
    {path:'order-history', component:OrderHistory},
    {path:'wishlist', component:Wishlist},
    {path:'login', component:Login},
    {path:'register', component:Register},
    {path:'forger-password', component:ForgerPassword},
    {path:'shipping-method', component:ShippingMethod},
    {path:'payment-method', component:PaymentMethod},
    {path:'invoice', component:Invoice},
    {path:'payment-confirmation', component:PaymentConfirmation},
    {path:'payment-success', component:PaymentSuccess},
    {path:'payment-failure', component:PaymentFailure},
    {path:'cart', component:Cart},
    {path:'checkout', component:Checkout},
    {path:'categories', component:ShopV1},
    {path:'shop-v1', component:ShopV1},
    {path:'shop-v2', component:ShopV2},
    {path:'shop-v3', component:ShopV3},
    {path:'shop-v4', component:ShopV4},
    {path:'shop-v4', component:ShopV4},
    {path:'product-details', component:ProductDetails},
    {path:'product-details/:id', component:ProductDetails},
    {path:'blog-v1', component:BlogV1},
    {path:'blog-v2', component:BlogV2},
    {path:'blog-details-v1', component:BlogDetailsV1},
    {path:'blog-details-v1/:id', component:BlogDetailsV1},
    {path:'blog-details-v2', component:BlogDetailsV2},
    {path:'blog-details-v2/:id', component:BlogDetailsV2},
    {path:'blog-details-v3', component:BlogDetailsV3},
    {path:'blog-tag', component:BlogTag},
    {path:'contact', component:Contact},
    {path:'product-category', component:ProductCategory},
    {path: 'qr-payment', component: QrPaymentComponent },
    {path: 'address', component: AddressComponent },
];
