import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employee } from 'src/app/models/employee.model';
import { department } from 'src/app/models/department.model';
import {BsDatepickerConfig} from'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
//  Employee: employee = {
//     id: 0,
//     name:'',
//     gender: '',
//     email: '',
//     contactPreferance: '',
//     department: '',
//     Photopath: '',
//   }
 
  
  name: string;
  email:string;
  gender:string;
  phoneNumber:number;
  contactPreferance: string;
  DateOfBirth: Date;
    department: string;
    inactive:boolean;
    Photopath: string;
    photopreview=true;


    departments:department[]=[
      {id:1, name:"HR"},
      {id:2, name:"IT"},
      {id:3, name:"Account"},
      {id:4, name:"Help-Desk"}
    ];

  employee:employee={
    name: "null",
    gender: "null",
    email: "null",
    contactPreferance: "null",
    Dateofbirth: new Date('dd/mm.yyyy'),
    department: "null",
    inactive: true,
    Photopath: "null",
    id: 0,
    phoneNumber: 0
  }
  

  constructor() {
    
   }

   
  togglePhotopreview(){
    this.photopreview = !this.photopreview;
  }
  ngOnInit(): void {
  }

  saveEmployee(empForm:NgForm):void{
console.log(empForm.value)
  }
}