import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService.userLoginOn.pipe(
    map((isLoggedIn) => {
      return isLoggedIn ? isLoggedIn : router.createUrlTree(['/auth/log-in']);
    })
  );
};
