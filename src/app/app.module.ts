import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees/listemployees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {BsDatepickerModule} from'ngx-bootstrap/datepicker';




@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateEmployeeComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot()
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
