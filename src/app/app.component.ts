import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
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
