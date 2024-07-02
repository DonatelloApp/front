import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { ButtonProviders } from "../../components/button-providers/button-providers.component";

@Component({
    standalone: true,
    selector: 'app-register-form',
    templateUrl: './RegisterForm.component.html',
    styleUrls: ['./RegisterForm.component.scss'],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        RouterModule,
        NgIf,
        MatSnackBarModule,
        ButtonProviders
    ]
})
export class RegisterFormComponent {
  hide = true;
  form: FormGroup;
isLastNameValid: any;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  register() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      this.snackBar.open('Account created!', 'Close', { duration: 3000 });
      // Navegar a otra ruta si es necesario
      // this.router.navigate(['/some-route']);
    } else {
      this.snackBar.open('Please fill out the form correctly!', 'Close', { duration: 3000 });
    }
  }

  get isNameValid() {
    return this.form.get('name')?.valid;
  }

  get isEmailValid() {
    return this.form.get('email')?.valid;
  }
}
