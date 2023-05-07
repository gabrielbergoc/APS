import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './accounts-list/account/account.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';

@NgModule({
  declarations: [
    AccountsListComponent,
    AccountComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class AccountsModule { }
