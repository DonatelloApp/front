import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Customer } from 'src/app/core/models/customer';
import { capitalizeWords } from 'src/app/utils/utils';

@Component({
  selector: 'app-customer-form',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnChanges, OnInit {
  @Input() customer: Customer | null = null;
  @Output() save = new EventEmitter<Customer>();
  customers: Customer[] = [];
  customerForm: FormGroup;
  @Input() insideModal: boolean = false;
  errorMessage: String = '';

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['customer'] && this.customer) {
      this.customerForm.patchValue(this.customer);
    }
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const customerReq: Customer = {
        name: capitalizeWords(this.customerForm.value.name),
        address: this.customerForm.value.address,
        phone: this.customerForm.value.phone,
      };

      if (this.customer) customerReq.id = this.customer.id;

      this.save.emit(customerReq);
    }
  }

  isInsideModal() {
    return this.insideModal;
  }
}
