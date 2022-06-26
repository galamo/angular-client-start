import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button";
import { ProductComponent } from './components/product/product.component'
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './components/pipes/search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ProductsListComponent,
    ProductComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


