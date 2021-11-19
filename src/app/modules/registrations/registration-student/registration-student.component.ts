import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-student',
  templateUrl: './registration-student.component.html',
  styleUrls: ['./registration-student.component.css'],
})
export class RegistrationStudentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      optionA: new FormControl(false),
      optionB: new FormControl(false),
      optionBExtra: new FormControl(''),
      optionCExtra: new FormControl(''),
    });
  }
}
