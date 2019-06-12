import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ProductComponent } from '../product/product.component';
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
    path:'products',
    component: ProductComponent
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
