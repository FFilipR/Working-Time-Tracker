import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { HttpClientModule} from "@angular/common/http";
import { EmployeeService} from "./services/employee.service";
import {FormsModule} from "@angular/forms";
import { TotalTimeWorkedPieChartComponent } from './components/total-time-worked-pie-chart/total-time-worked-pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    TotalTimeWorkedPieChartComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
