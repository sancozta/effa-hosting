import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { LANGUAGE_CODE, USE_DEVICE_LANGUAGE, SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
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
import { UsersComponent } from "./admin/dashboard/users/users.component";
import { LoginComponent } from './admin/login/login.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ReportComponent,
    CategoryComponent,
    ProductComponent,
    UsersComponent,
    ProfileComponent,
    ContactsComponent,
    NotificationComponent,
    AdminMenuComponent,
    ContentListFormComponent,
    ModalContentComponent,
    DropZoneUploadComponent,
    UploadTaskFileComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
  ],
  entryComponents: [
    ModalContentComponent,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
    { provide: LANGUAGE_CODE, useValue: 'pt-BR' },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
