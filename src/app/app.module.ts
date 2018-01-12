import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { ProductsComponent } from './components/products/products.component';
import { BuyersService } from './services/buyers.service';


const appRoutes: Routes = [
  { path: '', component: BuyersComponent },
  { path: 'buyers', component: BuyersComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    BuyersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [BuyersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
