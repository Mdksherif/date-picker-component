import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss']
})
export class TimepickerComponent implements OnInit {

  @Output() timeSelected = new EventEmitter<string>();
 
  selectedTime!: string;

  constructor(){}

  ngOnInit(): void {
   
  }

   onTimeChange(event: any) {
    this.selectedTime = event.target.value;
    this.timeSelected.emit(this.selectedTime);
  }
}
