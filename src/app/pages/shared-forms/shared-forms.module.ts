import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedformsRoutingModule } from './shared-forms-routing.module';
import { SharedFormsComponent } from './shared-forms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoInputComponent } from 'src/app/shared/app-form/info-input/info-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedformsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [InfoInputComponent],
  bootstrap: [SharedFormsComponent],
})
export class SharedformsModule {}
