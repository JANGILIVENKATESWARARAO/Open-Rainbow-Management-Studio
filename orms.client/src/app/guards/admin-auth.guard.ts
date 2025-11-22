import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  debugger;
  const role = localStorage.getItem('userRole');

  if (role === 'admin') {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
