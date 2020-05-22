import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module/material-module';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { TextCapitalizeDirective } from './directive-test/text-capitalize.directive';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { CityDescriptionModal } from './table-filter/cityDescription.modal';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    DirectiveTestComponent,
    TextCapitalizeDirective,
    TableFilterComponent,
    CityDescriptionModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
