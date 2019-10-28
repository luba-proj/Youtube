import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminPanelComponent} from './admin-panel.component'
import { MainLayotComponent } from '../../layout/main-layot/main-layot.component';

const routes: Routes = [
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
export class AdminPanelRoutingModule { }
