import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  selectedDate: string = '';
  showCalendar: boolean = false;
  currentMonth: number;
  daysInMonth: number[] = [];
  dayInWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  selectedYear: number;
  years: number[] = [];

// time picker
selectedHour!: number;
selectedMinute!: number;
selectedPeriod!: string;

  constructor() {
    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth();
    this.selectedYear = currentDate.getFullYear();
    this.generateDaysInMonth(this.currentMonth, this.selectedYear);
    this.years = this.generateYears();
  }

  ngOnInit(): void {}

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  prevMonth() {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.selectedYear--;
      this.generateDaysInMonth(this.currentMonth, this.selectedYear);
      this.selectedDate = `${this.months[this.currentMonth]} 1, ${this.selectedYear}`;
      this.years = this.generateYears();
    } else {
      this.generateDaysInMonth(this.currentMonth, this.selectedYear);
      this.selectedDate = `${this.months[this.currentMonth]} 1, ${this.selectedYear}`;
    }
  }

  nextMonth() {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.selectedYear++;
      this.generateDaysInMonth(this.currentMonth, this.selectedYear);
      this.selectedDate = `${this.months[this.currentMonth]} 1, ${this.selectedYear}`;
      this.years = this.generateYears();
    } else {
      this.generateDaysInMonth(this.currentMonth, this.selectedYear);
      this.selectedDate = `${this.months[this.currentMonth]} 1, ${this.selectedYear}`;
    }
  }

  // selectDate(day: number) {
  //   if (day) {
  //     this.selectedDate = `${this.months[this.currentMonth]} ${day}, ${this.selectedYear}`;
  //     this.showCalendar = false;
  //   }
  // }

  selectDate(day: number) {
    if (day !== -1) {
        this.selectedDate = `${this.months[this.currentMonth]} ${day}, ${this.selectedYear}`;
        const hour = this.selectedHour !== undefined ? this.selectedHour : 0;
        const minute = this.selectedMinute !== undefined ? this.selectedMinute : 0;
        const period = this.selectedPeriod !== undefined ? this.selectedPeriod : 'AM';
        this.selectedDate += ` ${hour}:${minute} ${period}`;
        this.showCalendar = false;
    }
  }

  generateDaysInMonth(month: number, year: number): void {
    this.daysInMonth = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    for (let i = 0; i < firstDayOfMonth; i++) {
      this.daysInMonth.push(-1);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      this.daysInMonth.push(i);
    }
  }

  generateYears(): number[] {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 10 }, (_, i) => currentYear - 5 + i);
  }

  // changeYear(year: number) {
  //   this.selectedYear = year;
  //   this.currentMonth = 0; // Resetting to January
  //   this.generateDaysInMonth(this.currentMonth, this.selectedYear);
  //   this.selectedDate = `${this.months[this.currentMonth]} 1, ${this.selectedYear}`;
  // }

  changeYear(year: number | null) {
    if (year !== null) {
        this.selectedYear = +year; // Convert the year to a number (in case it's a string)
        this.currentMonth = 0; // Resetting to January
        this.generateDaysInMonth(this.currentMonth, this.selectedYear);
        this.selectedDate = `${this.months[this.currentMonth]} 1, ${this.selectedYear}`;
    }
}






}
