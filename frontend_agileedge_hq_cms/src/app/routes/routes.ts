import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './login/login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';

export const routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'home', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', },
      { path: 'trainingManagement', loadChildren: './training-management/training-management.module#TrainingManagementModule' },
      { path: 'visitorManagement', loadChildren: './visitor-management/visitor-management.module#VisitorManagementModule' },
      { path: 'posManagement', loadChildren: './pos-management/pos-management.module#PosManagementModule' },
      { path: 'inventoryManagement', loadChildren: './inventory-management/inventory-management.module#InventoryManagementModule' },
      { path: 'incomeManagement', loadChildren: './income-management/income-management.module#IncomeManagementModule' },
      { path: 'employeeManagement', loadChildren: './employee-management/employee-management.module#EmployeeManagementModule' },
      { path: 'cafeManagement', loadChildren: './cafe-management/cafe-management.module#CafeManagementModule' },
      { path: 'roles', loadChildren: './roles/roles.module#RolesModule' },
      { path: 'reportsManagement', loadChildren: './reports-management/reports-management.module#ReportsManagementModule' },
      { path: 'leaveManagement', loadChildren: './leave-management/leave-management.module#LeaveManagementModule' },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
      { path: 'profile', loadChildren: './Profile/profile-module/profile-module.module#ProfileModuleModule' }
    ]
  },

  // // Not lazy-loaded routes
  // { path: 'login', component: LoginComponent },
  // { path: '', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  // { path: 'resetPassword', component: ResetPasswordComponent },


  // // Not found
  // { path: '**', redirectTo: 'login' }
  { path: 'login', loadChildren: '../routes/login/login.module#LoginModule' },
  { path: '**', redirectTo: 'login' },
  //   { path: 'dashboard',  redirectTo: 'dashboard' }

];
