/**
 * @author : S Rajesh 
 * 
 * */
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
  	MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
    ],
  providers: [],
  bootstrap: [],
  exports:[
  	MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
    ]
})
export class AngularMaterialModule { }
