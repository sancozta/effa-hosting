import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideRemoteConfig, getRemoteConfig } from '@angular/fire/remote-config';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { ContentListFormComponent } from './shared/components/content-list-form/content-list-form.component';
import { DropZoneUploadComponent } from './shared/components/drop-zone-upload/drop-zone-upload.component';
import { UploadTaskFileComponent } from './shared/components/upload-task-file/upload-task-file.component';
import { ModalContentComponent } from './shared/components/modal-content/modal-content.component';
import { NotificationComponent } from './admin/dashboard/notification/notification.component';
import { AdminMenuComponent } from './shared/components/admin-menu/admin-menu.component';
import { CategoryComponent } from './admin/dashboard/category/category.component';
import { ContactsComponent } from './admin/dashboard/contacts/contacts.component';
import { ProductComponent } from './admin/dashboard/product/product.component';
import { ProfileComponent } from './admin/dashboard/profile/profile.component';
import { ReportComponent } from './admin/dashboard/report/report.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/dashboard/users/users.component';
import { LoginComponent } from './admin/login/login.component';

import { SharedModule } from './shared/shared.module';
import { FirebaseService } from './shared/services/firebase.service';
import { UtilsService } from './shared/services/utils.service';

@NgModule({
  declarations: [
    AppComponent,
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
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
  ],
  entryComponents: [
    ModalContentComponent,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    FirebaseService,
    UtilsService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
