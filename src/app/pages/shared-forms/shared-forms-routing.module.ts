import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormsComponent } from './shared-forms.component';

const routes: Routes = [{ path: '', component: SharedFormsComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SharedformsRoutingModule {}
