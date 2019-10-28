import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MainLayotComponent } from '../../layout/main-layot/main-layot.component';
import {MainPanelComponent} from  '../../components/main-panel/main-panel.component' 
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: 'login',
    component: MainLayotComponent,
    children: [
      { path: '', component: LoginComponent },
    ]
  },
  {
    path: 'mainPanel',
    component: MainLayotComponent,
    children: [
      { path: '', component: MainPanelComponent },
    ]
  },
  {
    path: 'adminPanel',
    component: MainLayotComponent,
    children: [
      { path: '', component: AdminPanelComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
