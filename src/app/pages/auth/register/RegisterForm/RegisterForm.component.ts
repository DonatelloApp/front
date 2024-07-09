import { Component, inject } from '@angular/core';
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
import { ButtonProviders } from "src/app/components/common/button-providers/button-providers.component";
import { SingInRequest } from 'src/app/core/models/singInRequest';
import { SingInService } from 'src/app/core/services/singIn.service';
import { capitalizeWords } from 'src/app/utils/utils';
import { PhoneInputComponent } from 'src/app/components/common/phoneInput/phone-input.component';

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
        ButtonProviders,
        PhoneInputComponent
    ]
})
export class RegisterFormComponent {
  hide = true;
  form: FormGroup;
  isLastNameValid: any;
  private singInService = inject(SingInService);

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onPhoneChanged(phoneNumber: string) {
    this.form.controls['phone'].setValue(phoneNumber);
  }

  register() {
    if (this.form.valid) {
      const singInReq: SingInRequest = {
        name: capitalizeWords(this.form.value.name + ' ' + this.form.value.lastName),
        mail: this.form.value.email || '',
        password: this.form.value.password || '',
        password2: this.form.value.password || '',
        phone: this.form.value.phone || '',
      }
      this.singInService.singIn(singInReq).subscribe({
        next: (userData)=> {
        console.log(userData);
        },
        error: (errorData)=> {
          console.error(errorData); 
        },
        complete: () => {
          console.info("Login completado");
        }
      });

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
