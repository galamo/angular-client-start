import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatIconModule } from "@angular/material/icon"

import { MatButtonModule } from "@angular/material/button";
import { ProductComponent } from './components/product/product.component'
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './components/pipes/search/search.pipe';
import { CouponPipe } from './components/pipes/coupon/coupon.pipe';
import { AppRoutingModule } from './routing/app.routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { ToolbarComponent } from './components/app-components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ProductsListComponent,
    ProductComponent,
    SearchPipe,
    CouponPipe,
    SettingsComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


