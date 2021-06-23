import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { BootstrapformComponent } from './bootstrapform/bootstrapform.component';
import { Form2Component } from './form2/form2.component';

const routes: Routes = [
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'bootstrap',
    component: BootstrapformComponent
  },
  {
    path: 'form2',
    component: Form2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
