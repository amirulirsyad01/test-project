import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [NgFor],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  emps: any[] = [
    { id: '1', name: 'Darwish', gender: 'male', Role: 'Software Developer' },
    { id: '2', name: 'Danial', gender: 'male', Role: 'Human Resources' },
    { id: '3', name: 'Sameh', gender: 'male', Role: 'K2 Developer' },
    { id: '4', name: 'Irfan', gender: 'male', Role: 'Azure Architect' },
    { id: '5', name: 'Ahmed Sameer', gender: 'male', Role: 'Instructor' },
    { id: '6', name: 'Nada', gender: 'Female', Role: 'Graphic Designer' }
  ];
  

}
