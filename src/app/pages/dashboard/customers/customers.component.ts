import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from 'src/app/components/common/modal/modal.component';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/layout/sidebar/sidebar.component';
import { CustomerFormComponent } from 'src/app/components/specific/customer-form/customer-form.component';
import { Customer } from 'src/app/core/models/customer';
import { CustomerService } from 'src/app/core/services/customer.service';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerFormComponent,
    ModalComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  private loginService = inject(LoginService);
  private customerService = inject(CustomerService);
  userLoginOn: boolean = false;
  customers: Customer[] = [];
  selectedCustomer: Customer | null = null;
  navbarTitle = "Clientes"
  errorMessage: String = '';

  constructor() {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe({
      next: (userData) => {
        this.customers = userData;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info('Customers loaded successfully');
      },
    });
  }

  onEditCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

  onNewCustomer() {
    this.selectedCustomer = null;
  }

  onSaveCustomer(customer: Customer) {
    if (customer.id) {
      this.customerService.updateCustomer(customer).subscribe({
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () => {
          console.info('Customers successfully updated');
        },
      });
      this.selectedCustomer = null;
    } else {
      this.customerService.addCustomer(customer).subscribe({
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () => {
          console.info('Customers successfully added');
        },
      });
      this.selectedCustomer = null;
    }
  }
}