import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styles: [
    `
      button {
        @apply outline-none transition-all duration-200;
        &:not(.selected) {
          @apply focus:ring focus:ring-primary focus:ring-2;
        }
        &:disabled {
          opacity: 0.7;
        }
      }
      .selected {
        @apply shadow-lg border-primary;
      }
    `,
  ],
  animations: [
    trigger('selected', [
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      state('void', style({ opacity: 0, transform: 'scale(0)' })),
      transition(':enter', animate('300ms ease-in-out')),
      transition(':leave', animate('300ms ease-in-out')),
    ]),
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountrySelectorComponent),
      multi: true,
    },
  ],
})
export class CountrySelectorComponent implements ControlValueAccessor {
  constructor() {}

  ngOnInit() {}

  countries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'GB-ENG', name: 'England' },
    { code: 'NL', name: 'Netherlands' },
  ];
  selected!: string;
  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  selectCountry(code: string) {
    this.onTouched(); // <-- mark as touched
    this.selected = code;
    this.onChanged(code); // <-- call function to let know of a change
  }

  writeValue(value: string): void {
    this.selected = value ?? 'IN';
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn; // <-- save the function
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn; // <-- save the function
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
