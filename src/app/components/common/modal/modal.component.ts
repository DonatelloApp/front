import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-modal',
  standalone:true,
  imports:[],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output() submitForm = new EventEmitter<void>();

  onSubmit() {
    this.submitForm.emit();
  }
}
