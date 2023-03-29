import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstoryComponent } from './addstory/addstory.component';
import { ListstoryComponent } from './liststory/liststory.component';
import { SprintCalculatorComponent } from './sprint-calculator/sprint-calculator.component';

const routes: Routes = [
  {
    path:"",component:AddstoryComponent
  },
  {
    path:"listPage",component:ListstoryComponent
  },
  {
    path:"spCalculator",component:SprintCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
