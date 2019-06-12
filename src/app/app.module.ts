import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteModule } from './route/route.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreInfoService } from './store-info.service'
import { 
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatListModule 
      }from '@angular/material';
import { CartComponent } from './cart/cart.component'
import { ProductService } from './services/product.service';
import { RouteRoutingModule } from './route/route-routing.module';
import { FAQComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProductComponent,
    CartComponent,
    FAQComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    RouteRoutingModule

  ],
  providers: [StoreInfoService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
