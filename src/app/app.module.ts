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
import { ProductService } from './services/mob/product.service';
import { KompService } from './services/komp/komp.service';
import { VideoService } from './services/video/video.service';
import { FotoService } from './services/foto/foto.service';
import { OstaloService } from './services/ostalo/ostalo.service';
import { RouteRoutingModule } from './route/route-routing.module';
import { FAQComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { KompComponent } from './komp/komp.component';
import { VideoComponent } from './video/video.component';
import { FotoComponent } from './foto/foto.component';
import { GameComponent } from './game/game.component';
import { OstaloComponent } from './ostalo/ostalo.component';


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
    ContactComponent,
    AllproductsComponent,
    KompComponent,
    VideoComponent,
    FotoComponent,
    GameComponent,
    OstaloComponent
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
  providers: [StoreInfoService,ProductService,KompService,VideoService,FotoService,OstaloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
