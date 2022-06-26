import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './anonymous/signup/signup.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  
    {
      path:'' ,
      
      loadChildren: () => import('./anonymous/anonymous.module').then(m => m.AnonymousModule)
    },
    {
      path:'dashboard' ,
      canActivate:[AuthGuardGuard],
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
