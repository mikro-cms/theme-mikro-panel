import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@services/auth.guard';
import { UserGuard } from '@services/user.guard';

import { RegisterComponent } from '@components/register/register.component';
import { LoginComponent } from '@components/login/login.component';
import { UsersComponent } from '@components/users/users.component';
import { UserComponent } from '@components/user/user.component';
import { ApisComponent } from '@components/apis/apis.component';
import { ApiComponent } from '@components/api/api.component';
import { ResourceComponent } from '@components/resource/resource.component';
import { PagesComponent } from '@components/pages/pages.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'user/add',
    component: UserComponent,
    data: {
      type: 'add'
    },
    canActivate: [UserGuard]
  },
  {
    path: 'user/edit/:userIndex',
    component: UserComponent,
    data: {
      type: 'edit'
    },
    canActivate: [UserGuard]
  },
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'apis',
    component: ApisComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'api/:apiId',
    component: ApiComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'resource/:resourceIndex/:apiId/:resourceId',
    component: ResourceComponent,
    canActivate: [UserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
