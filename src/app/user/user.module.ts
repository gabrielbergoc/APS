import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class UserModule { }
