import { LayoutComponent } from '../layout/layout.component';
import { LoginComponent } from './login/login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
// import { ProfileComponent } from './profile/profile.component';
// import { ProfileComponent } from './dashboard/profile/profile.component';

export const routes = [

    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'login'},
        { path: 'home', loadChildren: './home/home.module#HomeModule' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        { path: 'profile', loadChildren: './Profile/profile-module/profile-module.module#ProfileModuleModule'},

        { path: 'visitorManagement', loadChildren: './visitor-management/visitor-management.module#VisitorManagementModule' },
        { path: 'trainingManagement', loadChildren: './training-management/training-management.module#TrainingManagementModule' },
        { path: 'posManagement', loadChildren: './pos-management/pos-management.module#PosManagementModule' },
        { path: 'inventoryManagement', loadChildren: './inventory-management/inventory-management.module#InventoryManagementModule' },
        // { path: 'incomeManagement', loadChildren: './income-management/income-management.module#IncomeManagementModule' },
        { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
        { path: 'leaveManagement', loadChildren: './leave-management/leave-management.module#LeaveManagementModule'  },
        { path: 'reportsManagement', loadChildren: './reports-management/reports-management.module#ReportsManagementModule'  },
        { path: 'controlBot', loadChildren: './control-bot/control-bot.module#ControlBotModule'  },
        // { path: 'holidayCalender', loadChildren: './public-holiday-calender/public-holiday-calender.module#PublicHolidayCalenderModule' },
        // { path: 'governmentApiCheck', loadChildren: './government-api-check/government-api-check.module#GovernmentApiCheckModule'  }
    ]
  },


    // // Not lazy-loaded routes
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'resetPassword/:id', component: ResetPasswordComponent },


    // // Not found
    // { path: '**', redirectTo: 'login' }
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' },
  //   { path: 'dashboard',  redirectTo: 'dashboard' }

  ];
