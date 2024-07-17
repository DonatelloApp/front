import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs';

export const publicGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  return loginService.userLoginOn.pipe(
    map((isLoggedIn) => {
      return !isLoggedIn ? true : router.createUrlTree(['/dashboard/']);
    })
  );
};
