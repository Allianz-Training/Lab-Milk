import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { Angular29Lab1Component } from './angular29-lab1/angular29-lab1.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { Hw1Component } from './hw1/hw1.component';
import { ProductComponent } from './product/product.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodolistComponent,
    Angular29Lab1Component,
    ProductListComponent,
    ProductItemComponent,
    Hw1Component,
    ProductComponent 
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
