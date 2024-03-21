import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  // 1st 
  @Input() minDate!: Date;
  @Input() maxDate!: Date;
  @Output() dateSelected = new EventEmitter<Date>();
  selectedDate!: Date;
  constructor(){}
  ngOnInit(): void {
  }
  onDateChange(event: any) {
    this.selectedDate = event.target.value;
    console.log("selected date componenet", this.selectedDate)
    this.dateSelected.emit(this.selectedDate);
  }


  //2nd
  // @Input() placeholder: string = 'Select Date';
  // selectedDate!: string; // This will hold the selected date
  // showCalendar: boolean = false; // Flag to toggle calendar visibility
  // ngOnInit(): void {
  // }
  // selectDate(date: string) {
  //   this.selectedDate = date;
  //   this.showCalendar = false; // Hide the calendar after selection
  // }


  //3rd
  // selectedDate!: string;
  // showCalendar: boolean = false;
  // currentMonth: number;
  // daysInMonth: number[];
  // months: string[];
  // constructor() {
  //   const currentDate = new Date();
  //   this.currentMonth = currentDate.getMonth();
  //   this.daysInMonth = this.generateDaysInMonth(currentDate.getMonth(), currentDate.getFullYear());
  //   this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // }
  // ngOnInit(): void { 
  // }
  // toggleCalendar() {
  //   this.showCalendar = !this.showCalendar;
  // }
  // prevMonth() {
  //   this.currentMonth--;
  //   if (this.currentMonth < 0) {
  //     this.currentMonth = 11;
  //   }
  //   this.daysInMonth = this.generateDaysInMonth(this.currentMonth, new Date().getFullYear());
  // }
  // nextMonth() {
  //   this.currentMonth++;
  //   if (this.currentMonth > 11) {
  //     this.currentMonth = 0;
  //   }
  //   this.daysInMonth = this.generateDaysInMonth(this.currentMonth, new Date().getFullYear());
  // }
  // selectDate(day: number) {
  //   this.selectedDate = `${this.months[this.currentMonth]} ${day}, ${new Date().getFullYear()}`;
  //   this.showCalendar = false;
  // }
  // generateDaysInMonth(month: number, year: number): number[] {
  //   const daysInMonth = new Date(year, month + 1, 0).getDate();
  //   return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  // }
}
