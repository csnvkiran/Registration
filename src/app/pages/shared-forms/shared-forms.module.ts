import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NumberInputComponent } from './shared/app-form/number-input/number-input.component';
import { CounterInputComponent } from './shared/app-form/counter-input/counter-input.component';
import { CountrySelectorComponent } from './shared/app-form/country-selector/country-selector.component';
import { InfoInputComponent } from './shared/app-form/info-input/info-input.component';
import { ShareformsRoutingModule } from './shared-forms-routing.module';
import { SharedFormsComponent } from './shared-forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
export class SharedformsModule {}
