import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-forms',
  templateUrl: './shared-forms.component.html',
  styleUrls: ['./shared-forms.component.scss'],
})
export class SharedFormsComponent {
  // constructor() {}

  myform: FormGroup;

  ngOnInit() {
    this.myform = this.createForm();
  }

  createForm() {
    return new FormGroup({
      name: new FormControl(''),
      white_wine: new FormControl(10, [Validators.min(10), Validators.max(20)]),
      red_wine: new FormControl(0),
      beer: new FormControl('', [Validators.required]),
      server: new FormControl(''),
      information: new FormControl(''),
      infonew: new FormControl(''),
    });
  }
}
