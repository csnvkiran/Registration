import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegistrationsModule } from './features/registrations/registrations.module';

import { AppRoutingModule } from './app-routing.module';
import { SharedformsModule } from './pages/shared-forms/shared-forms.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RegistrationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedformsModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
