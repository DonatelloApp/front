import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { PhoneInputComponent } from 'src/app/components/common/phoneInput/phoneInput.component';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';
import { UserProfile } from 'src/app/core/models/userProfile';
import { LoginService } from 'src/app/core/services/login.service';
import { environment } from 'src/environments/environment';
import { NgIf, NgClass } from '@angular/common';
import { UserProfileService } from 'src/app/core/services/userProfile.service';
import { capitalizeWords } from 'src/app/utils/utils';

declare var intlTelInput: any;

@Component({
  standalone: true,
  selector: 'app-user-profile',
  imports: [NavbarComponent, ReactiveFormsModule, PhoneInputComponent, NgIf, NgClass],
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent {

  private loginService = inject(LoginService);
  private userProfileService = inject(UserProfileService);
  private http = inject(HttpClient);
  private formBuilder = inject(FormBuilder);
  userLoginOn:boolean = false;
  userProfile?:UserProfile; 
  errorMessage:String="";
  userProfileForm: FormGroup;
  isValid:boolean=false;

  constructor(){

    this.userProfileForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      companyName: ['', Validators.required],
      address: ['', Validators.required],
      addressDetails: [''],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
    })

    this.loginService.userLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn = userLoginOn;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info('User Data ok');
      }
    })

    this.userProfileService.getUserProfile().subscribe({
      next:(userData) => {
        this.userProfile = userData;
        this.userProfileForm.patchValue(userData);
      },
      error:(errorData) => {
        this.errorMessage = errorData;
      },
      complete:() =>{
        console.info('User Profile Data ok');
      }
    })

  }

  saveUserProfile(){
    if (this.userProfileForm.valid&&this.isValid) {

      const userProfileReq: UserProfile = {
        name: capitalizeWords(this.userProfileForm.value.name),
        phone: this.userProfileForm.value.phone,
        companyName: this.userProfileForm.value.companyName,
        address: this.userProfileForm.value.address,
        addressDetails: this.userProfileForm.value.addressDetails || '',
        city: this.userProfileForm.value.city,
        postalCode: this.userProfileForm.value.postalCode,
        country: this.userProfileForm.value.country,
      }
      console.log(userProfileReq);

      this.userProfileService.updateUserProfile(userProfileReq).subscribe({
        next:(userData) => {
          this.userProfile = userData;
          this.userProfileForm.patchValue(userData);
        },
        error:(errorData) => {
          this.errorMessage = errorData;
        },
        complete:() =>{
          console.info('User Profile Data ok');
        }
      })

    }else{
      console.log("formulario incompleto")
    }

  }

  private handleError(error:HttpErrorResponse){
    if(error.status==0)console.error('Se ha producido un error', error.error);
    else console.error('Backend retorno el codigo de estado: ', error.status, error.error)
    return throwError(()=> new Error('Algo fallo. Por favor intente de nuevamente.'));
  }

  onPhoneChanged(phoneNumber: string) {
    this.userProfileForm.controls['phone'].setValue(phoneNumber);
  }

  onValidChanged(isValid: boolean) {
    this.isValid = isValid;
  }

  get formControl() { return this.userProfileForm.controls; }

}
