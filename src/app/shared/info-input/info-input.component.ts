import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-info-input',
  templateUrl: './info-input.component.html',
  styleUrls: ['./info-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InfoInputComponent),
      multi: true,
    },
  ],
})
export class InfoInputComponent implements OnInit {
  @Input() maxLength: number;
  @Input() infoEnabled: boolean;
  @Input() infoMessage: string;
  @Input() infoImage: string;

  val = '';
  showtoggle = false;

  disabled = false;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {
    this.maxLength = this.maxLength || 50;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched(val);
  }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onfocusin(event: any): void {
    this.showtoggle = true;
  }

  onfocusout(event: any): void {
    this.showtoggle = false;
  }

  userChange(event: any): void {
    this.onChange(event.target.value);
  }
}
