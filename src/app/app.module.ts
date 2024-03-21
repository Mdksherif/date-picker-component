import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    TimepickerComponent,
    HomeComponentComponent,
    DatePickerComponent,

    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
