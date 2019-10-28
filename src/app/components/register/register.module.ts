import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlertsModule } from 'angular-alert-module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertsModule.forRoot()
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
