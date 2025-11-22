import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const hrAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  debugger;
  const role = localStorage.getItem('userRole');

  if (role === 'hr') {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
