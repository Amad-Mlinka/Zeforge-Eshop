import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SidebarComponent } from '../sidebar/sidebar.component'
import { KompComponent } from '../components/komp/komp.component';
import { ProductComponent } from '../components/product/product.component';
import { GameComponent } from '../components/game/game.component';
import { FotoComponent } from '../components/foto/foto.component';
import { VideoComponent } from '../components/video/video.component';
import { OstaloComponent } from '../components/ostalo/ostalo.component';
import { CartComponent } from '../cart/cart.component';
import { FAQComponent } from '../faq/faq.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component'

const routes: Routes = [
  {
    path: '',
    component:WelcomeComponent
  },
  {
    path: 'sidebar',
    component:SidebarComponent
  },
  {
    path: 'komp',
    component: KompComponent
  },
  {
    path: 'mob',
    component: ProductComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'foto',
    component: FotoComponent
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'ostalo',
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
