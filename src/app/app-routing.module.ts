import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListemployeesComponent } from './employees/listemployees/listemployees.component';
import {CreateEmployeeComponent} from './employees/create-employee/create-employee.component';

const routes: Routes = [
  { path: 'list', component: ListemployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
