import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.scss']
})
export class ListemployeesComponent implements OnInit {
  employees:employee[]=[
    {
      id:1,
      name:"sumit",
      gender: "male",
    email: "sumitpruthi@123gmail.com",
    phoneNumber: 123456789,
    contactPreferance: "phonecall",
    Dateofbirth: new Date (10/10/1990),
    department: "account",
    inactive:true,
    Photopath: 'assets/images3.jpg',
    },
    {
      id:2,
      name:"sandeep",
      gender: "male",
    email: "sumitpruthi@123gmail.com",
    phoneNumber: 123456789,
    contactPreferance: "phonecall",
    Dateofbirth: new Date (10/10/1990),
    department: "account",
    inactive:true,
    Photopath: 'assets/images3.jpg',
    },
    {
      id:3,
      name:"Indu",
      gender: "female",
    email: "sumitpruthi@123gmail.com",
    phoneNumber: 123456789,
    contactPreferance: "phonecall",
    Dateofbirth: new Date (10/10/1990),
    department: "account",
    inactive:true,
    Photopath: 'assets/image1.jpg',
    },
    {
      id:4,
      name:"simran",
      gender: "male",
    email: "sumitpruthi@123gmail.com",
    phoneNumber: 123456789,
    contactPreferance: "phonecall",
    Dateofbirth: new Date (10/10/1990),
    department: "account",
    inactive:true,
    Photopath: 'assets/images3.jpg',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
