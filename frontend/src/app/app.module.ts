import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipe-custom/search.pipe';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { SginupComponent } from './components/sginup/sginup.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { HeaderBaseComponent } from './components/header-base/header-base.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    HomePageComponent,
    SearchPipe,
    ProductAddComponent,
    SginupComponent,
    HeaderAdminComponent,
    HeaderBaseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
