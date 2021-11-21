import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationsModule } from './features/registrations/registrations.module';

import { NumberInputComponent } from './shared/app-form/number-input/number-input.component';
import { CounterInputComponent } from './shared/app-form/counter-input/counter-input.component';
import { CountrySelectorComponent } from './shared/app-form/country-selector/country-selector.component';
import { InfoInputComponent } from './shared/app-form/info-input/info-input.component';
import { ShareformsRoutingModule } from './shared-forms-routing.module';
import { SharedFormsComponent } from './shared-forms.component';


@NgModule({
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    ShareformsRoutingModule,
  ],
  declarations: [
    CounterInputComponent,
    NumberInputComponent,
    CountrySelectorComponent,
    InfoInputComponent,
  ],
  bootstrap: [SharedFormsComponent],
})