import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayotComponent } from './main-layot/main-layot.component';
import { HeadComponent } from './head/head.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FlexLayoutModule
  ],
  exports: [
    MainLayotComponent,
  ],
  declarations: [
    MainLayotComponent,
    HeadComponent
  ]
})
export class LayoutModule { }
