import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '../components/sign-in/sign-in.component';
import { CustomerFormComponent } from '../components/customer-form/customer-form.component';
 import { ForgetPasswordComponent } from '../components/forget-password/forget-password.component';
 import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AddNewUserComponent } from '../components/admin-panel/user/add-new-user/add-new-user.component';
import { UserComponent } from '../components/admin-panel/user/user.component';
import { AdminPanelComponent } from '../components/admin-panel/admin-panel.component';
import { AddNewUser } from '../model/addnewUser';
import { AdminDashboardComponent } from '../components/admin-panel/admin-dashboard/admin-dashboard.component';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },

  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'customer',
    component: CustomerFormComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },
 
  {
    path:'adminDashboard',
    component:AdminDashboardComponent
  },

  {
    path:'reset/:token',
    component:ResetPasswordComponent
  }
  // {
  //   path:'app-add-new-user',
  //   component:AddNewUserComponent
  // },
  // {
  //   path:'app-user',
  //   component:UserComponent
  // }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }