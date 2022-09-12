import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmailComponent } from './components/email/email.component';
// given emailcomponents password and confirm password for reset link
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetemail', component:ForgetPasswordComponent},
  {path:'User/ResetPassword/:token', component:EmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [RegistrationComponent,LoginComponent]
