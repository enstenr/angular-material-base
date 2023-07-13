/**
 * @author : S Rajesh 
 * 
 * */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component'
import { Component3Component } from './component3/component3.component'
import { Component4Component } from './component4/component4.component'
const routes: Routes = [
  { path: 'load-comp1', component: Component1Component }, 
  { path: 'load-comp2', component: Component2Component }, 
   { path: 'load-comp3', component: Component3Component },
    { path: 'load-comp4', component: Component4Component },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
