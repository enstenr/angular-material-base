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
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// importing all mat modules that are needed and exporting them back to be used in the app module
@NgModule({
  declarations: [],
  imports: [
  	MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule, 
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressBarModule
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
    MatSelectModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressBarModule
    ]
})
export class AngularMaterialModule { }
