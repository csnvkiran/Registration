import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedformsRoutingModule } from './shared-forms-routing.module';
import { SharedFormsComponent } from './shared-forms.component';

import { CounterInputComponent } from 'src/app/shared/app-form/counter-input/counter-input.component';
import { NumberInputComponent } from 'src/app/shared/app-form/number-input/number-input.component';
import { CountrySelectorComponent } from 'src/app/shared/app-form/country-selector/country-selector.component';
import { InfoInputComponent } from 'src/app/shared/app-form/info-input/info-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedformsRoutingModule,
  ],
  declarations: [
    CounterInputComponent,
    NumberInputComponent,
    CountrySelectorComponent,
    InfoInputComponent,
    SharedFormsComponent,
  ],
  bootstrap: [SharedFormsComponent],
})
export class SharedformsModule {}
