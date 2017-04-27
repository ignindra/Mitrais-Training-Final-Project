import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeDashboardComponent } from './home-dashboard.component';
import { FilterDialogComponent } from './filter-dialog.component';
import { DeleteDialogComponent } from './delete-dialog.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeService } from './employee.service';
import { AppFormService } from './app-form.service';
import { lookupListToken, lookupLists } from './providers';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    EmployeeDetailComponent,
    FilterDialogComponent,
    DeleteDialogComponent
  ],
  providers:    [ 
    EmployeeService,
    AppFormService,
    { provide: lookupListToken, useValue: lookupLists },
  ],
  entryComponents: [ 
    FilterDialogComponent,
    DeleteDialogComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }