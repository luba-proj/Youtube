
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { AlertsModule } from 'angular-alert-module';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import {UserService} from "./services/user.service";
import {VideosService} from './services/videos.service';
import { RegisterModule } from './components/register/register.module';
import {LoginModule} from './components/login/login.module';
import {LayoutModule} from './layout/layout.module';
import {AdminPanelModule} from './components/admin-panel/admin-panel.module'
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    LoginModule,
    RegisterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonsModule,
    BrowserAnimationsModule,
    AdminPanelModule,
    AlertsModule.forRoot(),
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [UserService, VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
