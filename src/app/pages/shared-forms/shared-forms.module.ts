import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedformsRoutingModule } from './shared-forms-routing.module';
import { SharedFormsComponent } from './shared-forms.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedformsRoutingModule,
    SharedModule,
  ],
  declarations: [SharedFormsComponent],
  export: [SharedFormsComponent]
  bootstrap: [],
})
export class SharedformsModule {}
