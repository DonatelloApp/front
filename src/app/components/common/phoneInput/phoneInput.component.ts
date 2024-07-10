import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

declare var intlTelInput: any;

@Component({
  selector: 'app-phone-input',
  standalone: true,
  templateUrl: './phoneInput.component.html',
  styleUrls: ['./phoneInput.component.scss']
})
export class PhoneInputComponent {
  @Output() phoneChanged = new EventEmitter<string>();

  ngAfterViewInit() {

    const input = document.querySelector("#phoneInput") as HTMLInputElement;
    const iti = intlTelInput(input, {
      initialCountry: 'auto',
      separateDialCode: true,
      containerClass: "phoneInputContainer",
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/utils.js"
    });

    input.addEventListener('change', () => {
      this.phoneChanged.emit(iti.getNumber());
    });

  }
}
