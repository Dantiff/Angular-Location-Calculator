import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Calculator } from './calculator/calculator.component';


const routes: Routes = [
  
  { path: '', redirectTo: 'calculator', pathMatch: 'full' },
  {
    path: 'calculator',
    component: Calculator
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }