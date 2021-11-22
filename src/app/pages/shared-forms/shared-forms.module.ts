import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { CounterInputComponent } from './shared/app-form/counter-input/counter-input.component';
// import { CountrySelectorComponent } from './shared/app-form/country-selector/country-selector.component';
// import { InfoInputComponent } from './shared/app-form/info-input/info-input.component';
// import { NumberInputComponent } from './shared/app-form/number-input/number-input.component';
import { SharedformsRoutingModule } from './shared-forms-routing.module';
import { SharedFormsComponent } from './shared-forms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedformsRoutingModule,
  ],
  declarations: [
    // CounterInputComponent,
    // NumberInputComponent,
    // CountrySelectorComponent,
    // InfoInputComponent,
  ],
  bootstrap: [SharedFormsComponent],
})
export class SharedformsModule {}
