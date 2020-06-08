import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GroceryComponent } from './app.grocery';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    GroceryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
