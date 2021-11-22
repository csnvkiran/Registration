import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CounterInputComponent } from './app-form/counter-input/counter-input.component';
import { InfoInputComponent } from './app-form/info-input/info-input.component';
import { MobileInputComponent } from './app-form/mobile-input/mobile-input.component';
import { NumberInputComponent } from './app-form/number-input/number-input.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    CounterInputComponent,
    InfoInputComponent,
    MobileInputComponent,
    NumberInputComponent,
  ],
  exports: [
    CounterInputComponent,
    InfoInputComponent,
    MobileInputComponent,
    NumberInputComponent,
  ],
})
export class SharedModule {}
