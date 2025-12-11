import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName = 'Angular v-21 Full Course';
  cityName = "Nagpur";
  className = "primary";
  inoutType = "date";

  showWelcomeMessage() {
    alert("Welcome to Angular 21")
  }
}
