import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }   from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { MainPanelComponent }   from './components/main-panel/main-panel.component';
import { MainLayotComponent } from './layout/main-layot/main-layot.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent,MainLayotComponent]
