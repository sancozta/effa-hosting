import { NgModule } from '@angular/core';

import { UtilsService } from '../shared/services/utils.service';
import { FirebaseService } from '../shared/services/firebase.service';

import { AdminRoutingModule } from './admin.routing.module';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './dashboard/report/report.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { ProductComponent } from './dashboard/product/product.component';
import { UsersComponent } from './dashboard/users/users.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';
import { NotificationComponent } from './dashboard/notification/notification.component';

import { AdminMenuComponent } from './shared/components/admin-menu/admin-menu.component';
import { ContentListFormComponent } from './shared/components/content-list-form/content-list-form.component';
import { ModalContentComponent } from './shared/components/modal-content/modal-content.component';
import { DropZoneUploadComponent } from './shared/components/drop-zone-upload/drop-zone-upload.component';
import { UploadTaskFileComponent } from './shared/components/upload-task-file/upload-task-file.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminMenuComponent,
    ContentListFormComponent,
    ModalContentComponent,
    DropZoneUploadComponent,
    UploadTaskFileComponent,
    LoginComponent,
    DashboardComponent,
    ReportComponent,
    CategoryComponent,
    ProductComponent,
    UsersComponent,
    ProfileComponent,
    ContactsComponent,
    NotificationComponent,
  ],
  entryComponents: [
    ModalContentComponent,
  ],
  providers: [
    FirebaseService,
    UtilsService,
  ],
})
export class AdminModule { }
