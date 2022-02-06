import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationComponent } from './admin/dashboard/notification/notification.component';
import { CategoryComponent } from './admin/dashboard/category/category.component';
import { ContactsComponent } from './admin/dashboard/contacts/contacts.component';
import { ProductComponent } from './admin/dashboard/product/product.component';
import { ProfileComponent } from './admin/dashboard/profile/profile.component';
import { ReportComponent } from './admin/dashboard/report/report.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/dashboard/users/users.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'report',
        component: ReportComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'notification',
        component: NotificationComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: '',
        redirectTo: 'report',
        pathMatch: 'full',
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
