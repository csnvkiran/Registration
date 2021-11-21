import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegistrationsModule } from './features/registrations/registrations.module';

import { NumberInputComponent } from './shared/app-form/number-input/number-input.component';
import { CounterInputComponent } from './shared/app-form/counter-input/counter-input.component';
import { CountrySelectorComponent } from './shared/app-form/country-selector/country-selector.component';
import { InfoInputComponent } from './shared/app-form/info-input/info-input.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RegistrationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CounterInputComponent,
    NumberInputComponent,
    CountrySelectorComponent,
    InfoInputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
