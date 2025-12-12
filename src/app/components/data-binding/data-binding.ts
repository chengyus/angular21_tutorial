import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
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

  onStateChanged() {
    alert("State Changed")
  }
}
