import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

declare var intlTelInput: any;

@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './phoneInput.component.html',
  styleUrls: ['./phoneInput.component.scss']
})
export class PhoneInputComponent {
  @Input() initialValue: string | undefined;
  @Output() phoneChanged = new EventEmitter<string>();
  @Output() validPhoneChanged = new EventEmitter<boolean>();
  private iti: any;
  isValid = false;
  
  ngAfterViewInit() {

    const input = document.querySelector("#phoneInput") as HTMLInputElement;
    this.iti = intlTelInput(input, {
      initialCountry: 'auto',
      separateDialCode: true,
      containerClass: "phoneInputContainer",
      strictMode: true,
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/utils.js"
    });
    
    if (this.initialValue) {
      this.iti.setNumber(this.initialValue);
    }

    input.addEventListener('input', () => {
      this.phoneChanged.emit(this.iti.getNumber());
      this.isValid = this.iti.isValidNumber();
      this.validPhoneChanged.emit(this.iti.isValidNumber());
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue'] && this.iti) {
      this.iti.setNumber(changes['initialValue'].currentValue); 
      this.phoneChanged.emit(changes['initialValue'].currentValue);
      this.isValid = true;
      this.validPhoneChanged.emit(true);
    }
  }
}
