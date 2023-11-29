import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { SginupComponent } from './components/sginup/sginup.component';

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: 'home', component:HomePageComponent}
    ]
  },
  {
    path:'admin', component: AdminLayoutComponent, children:[
      {path:"", redirectTo: "home", pathMatch: "full"},
      {path:'home', component: ProductListComponent},
      {path:'add', component: ProductAddComponent},
      {path:'edit/:id', component: ProductAddComponent},
      {path: 'signup', component:SginupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
