import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterInputComponent } from './app-form/counter-input/counter-input.component';
import { InfoInputComponent } from './app-form/info-input/info-input.component';
import { MobileInputComponent } from './app-form/mobile-input/mobile-input.component';
import { NumberInputComponent } from './app-form/number-input/number-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CounterInputComponent,
    CounterInputComponent,
    InfoInputComponent,
    MobileInputComponent,
    NumberInputComponent,
  ],
  exports: [
    CounterInputComponent,
    CounterInputComponent,
    InfoInputComponent,
    MobileInputComponent,
    NumberInputComponent,
  ],
})
export class SharedModule {}
