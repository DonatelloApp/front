import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonProviders } from 'src/app/components/common/button-providers/button-providers.component';
import { LoginService } from 'src/app/core/services/login.service';
import { LoginRequest } from 'src/app/core/models/loginRequest';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface LogInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    NgIf,
    NgClass,
    MatSnackBarModule,
    ButtonProviders,
    HttpClientModule
  ],
  selector: 'app-log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.scss'],
  providers: [LoginService, HttpClient],
})
export class LogInComponent {
  hide = true;

  formBuilder = inject(FormBuilder); 

  private loginService = inject(LoginService);

  private router = inject(Router);

  private _snackBar = inject(MatSnackBar);
 
  form: FormGroup<LogInForm> = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: this.formBuilder.control('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  get isEmailValid(): string | boolean {
    const control = this.form.get('email');

    const isInvalid = control?.invalid && control.touched;

    if (isInvalid) {
      return control.hasError('required')
        ? 'This field is required'
        : 'Enter a valid email';
    }

    return false;
  }

  async logIn(): Promise<void> {
    if (this.form.valid){

      const loginReq: LoginRequest = {
        mail: this.form.value.email || '',
        password: this.form.value.password || '',
      }
  
      try {
        this.loginService.login(loginReq).subscribe({
          next: (userData)=> {
            console.log(userData);
            const snackBarRef = this.successfulLoginSnackBar();
            snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigateByUrl('/dashboard');
            });
          },
          error: (errorData)=> {
            console.error(errorData); 
            const snackBarRef = this.failedLoginSnackBar();
          },
          complete: () => {
            console.info("Login completado");
          }
        });
        
      } catch (error) {
        console.error(error);
      }
    }else {
      console.log('formulario incompleto');
    }
  }

  successfulLoginSnackBar() {
    return this._snackBar.open('Log in Exitoso', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  failedLoginSnackBar() {
    return this._snackBar.open('Log in Fallido. Por favor revise las credenciales.', 'Close', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  get formControl() {
    return this.form.controls;
  }
}
