import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const employeeAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  debugger;
  const role = localStorage.getItem('userRole');

  if (role === 'employee') {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
