/**
 * @author : S Rajesh 
 * 
 * */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularMaterialModule} from './angular.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
