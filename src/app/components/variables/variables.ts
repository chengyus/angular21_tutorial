import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  courseName: string = 'Angular 21';
  currentVersion = 'v.21';

  rollNo: number = 121;
  productPrice = 1200.5;

  isActive: boolean = false;
  isPresent = true;

  currentDate: Date = new Date();

  cityList: string[] = ['Pune', 'Mumbai', 'Jaipur'];

  rollNoArray: number[] = [111, 112, 113, 114, 115];

  studentObj = {
    name: 'Chetan',
    modbile: '9900990000',
    email: 'chetan@gmail.com',
  };

  studentList = [
    { name: 'ABC', city: 'Pune' },
    { name: 'MNQ', city: 'Mumbai' },
    { name: 'QWE', city: 'Jaipur' },
  ];

  constructor() {
    this.courseName = '2233';

    this.rollNo = 234;
  }
}
