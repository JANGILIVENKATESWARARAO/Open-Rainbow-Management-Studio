import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { emp_routes } from './Routes/employee-routing.module';
import { LoginPageComponent } from './modules/login-page/login-page/login-page.component';
import { admin_routes } from './Routes/admin-routing.module';
import { hr_routes } from './Routes/hr-routing.module';

export const routes: Routes = [
  {
    path: 'employee',
    children: emp_routes,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    children: admin_routes,
  },
  {
    path: 'hr',
    children: hr_routes,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
