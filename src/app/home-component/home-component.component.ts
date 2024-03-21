import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {

  minDate = moment().subtract(1, 'month').toDate();
  maxDate = moment().add(1, 'month').toDate();
  selectedDate!: Date;
  selectedTime!: string;

  constructor(){}

  onDateSelected(date: Date) {
    this.selectedDate = date;
    console.log("selected date", this.selectedDate)
  }

  onTimeSelected(time: string) {
    this.selectedTime = time;
    console.log("selected time", this.selectedTime)
  }

}
