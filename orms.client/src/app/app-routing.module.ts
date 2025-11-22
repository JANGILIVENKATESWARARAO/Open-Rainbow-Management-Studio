import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { emp_routes } from './Routes/employee-routing.module';
import { LoginPageComponent } from './modules/login-page/login-page/login-page.component';
import { admin_routes } from './Routes/admin-routing.module';
import { hr_routes } from './Routes/hr-routing.module';
import { employeeAuthGuard } from './guards/employee-auth.guard';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { hrAuthGuard } from './guards/hr-auth.guard';

export const routes: Routes = [
  {
    path: 'employee',
    children: emp_routes,
    canActivate: [employeeAuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    children: admin_routes,
    canActivate: [adminAuthGuard],
  },
  {
    path: 'hr',
    children: hr_routes,
    canActivate: [hrAuthGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
