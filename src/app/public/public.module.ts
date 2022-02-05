import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PublicRoutingModule } from './public.routing.module';

import { PublicComponent } from './public.component';

import { FirebaseService } from '../shared/services/firebase.service';
import { UtilsService } from '../shared/services/utils.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
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
