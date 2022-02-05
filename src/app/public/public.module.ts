import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public.routing.module';
import { SharedModule } from './../shared/shared.module';

import { PublicComponent } from './public.component';

import { FirebaseService } from '../shared/services/firebase.service';
import { UtilsService } from '../shared/services/utils.service';

@NgModule({
  imports: [
    SharedModule,
    PublicRoutingModule,
  ],
  declarations: [
    PublicComponent,
  ],
  providers: [
    FirebaseService,
    UtilsService,
  ],
})
export class PublicModule { }
