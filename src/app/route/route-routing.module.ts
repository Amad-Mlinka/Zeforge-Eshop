import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AllproductsComponent } from '../allproducts/allproducts.component'
import { KompComponent } from '../komp/komp.component';
import { ProductComponent } from '../product/product.component';
import { GameComponent } from '../game/game.component';
import { FotoComponent } from '../foto/foto.component';
import { VideoComponent } from '../video/video.component';
import { OstaloComponent } from '../ostalo/ostalo.component';
import { CartComponent } from '../cart/cart.component';
import { FAQComponent } from '../faq/faq.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component'

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'allproducts',
    component:AllproductsComponent
  },
  {
    path:'komp',
    component: KompComponent
  },
  {
    path:'mob',
    component: ProductComponent
  },
  {
    path:'game',
    component: GameComponent
  },
  {
    path:'foto',
    component: FotoComponent
  },
  {
    path:'video',
    component: VideoComponent
  },
  {
    path:'ostalo',
    component: OstaloComponent
  },
  { 
    path: 'cart', 
    component: CartComponent 
  },
  { 
    path: 'faq', 
    component: FAQComponent 
  },
  { 
    path: 'blog', 
    component: BlogComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
