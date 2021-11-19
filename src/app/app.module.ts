import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegistrationsModule } from './modules/registrations/registrations.module';
import { CounterInputComponent } from './shared/counter-input/counter-input.component';
import { NumberInputComponent } from './shared/number-input/number-input.component';
import { CountrySelectorComponent } from './shared/country-selector/country-selector.component';
import { InfoInputComponent } from './shared/info-input/info-input.component';

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
