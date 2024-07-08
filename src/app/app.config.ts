import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtInterceptorService } from './service/auth/jwt-interceptor.service';
import { ErrorInterceptorService } from './service/auth/error-interceptor.service';

const NO_NG_MODULES = importProvidersFrom([BrowserAnimationsModule]);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    NO_NG_MODULES,
    importProvidersFrom(HttpClientModule),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        color: 'accent',
      },
    },
    {provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService, 
      multi:true
    },
    {provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService, 
      multi:true
    },
  ],
};
