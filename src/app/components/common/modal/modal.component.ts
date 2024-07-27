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

  @Input()title: string = '';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
  
}
