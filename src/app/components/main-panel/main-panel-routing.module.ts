import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPanelComponent } from './main-panel.component';
import { MainLayotComponent } from '../../layout/main-layot/main-layot.component';

const routes: Routes = [
  {
    path: 'mainPanel',
    component: MainLayotComponent,
    children: [
      { path: '', component: MainPanelComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPanelRoutingModule { }
