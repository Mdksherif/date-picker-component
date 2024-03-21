import { Component } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent {

  selectedHour: number = 0;
  selectedMinute: number = 0;
  selectedPeriod: any

  hours: number[] = [];
  minutes: number[] = [];
  selectedTime: string="";

  showTime : boolean=false;

  constructor() {
    this.initTimeOptions();
  }

  initTimeOptions() {
    // Populate hours array with values from 0 to 23
    for (let i = 0; i < 13; i++) {
      this.hours.push(i);
    }

    // Populate minutes array with values from 0 to 59
    for (let i = 0; i < 60; i++) {
      this.minutes.push(i);
    }
  }
  updateTime() {
    // Check if all values are defined
    if (this.selectedHour !== undefined && this.selectedMinute !== undefined && this.selectedPeriod !== undefined) {
      // Store the selected time directly
      this.selectedTime = `${this.selectedHour}:${this.selectedMinute} ${this.selectedPeriod}`;

      // You can perform any additional logic here
      console.log(`Selected time: ${this.selectedTime}`);
    } else {
      // Handle case where one or more values are undefined
      console.error('Please select hour, minute, and period.');
    }
  }

  toggleCalendar() {
    this.showTime = !this.showTime;
    console.log("calender status", this.showTime)
  }

}
