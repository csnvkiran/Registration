import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterInputComponent } from './app-form/counter-input/counter-input.component';
import { InfoInputComponent } from './app-form/info-input/info-input.component';
import { MobileInputComponent } from './app-form/mobile-input/mobile-input.component';
import { NumberInputComponent } from './app-form/number-input/number-input.component';
import { CountrySelectorComponent } from './app-form/country-selector/country-selector.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CounterInputComponent,
    CountrySelectorComponent,
    InfoInputComponent,
    MobileInputComponent,
    NumberInputComponent,
  ],
  exports: [
    CounterInputComponent,
    CountrySelectorComponent,
    InfoInputComponent,
    MobileInputComponent,
    NumberInputComponent,
  ],
})
export class SharedModule {}
