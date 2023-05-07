import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TransactionsListComponent,
  ],
  imports: [
    SharedModule,
  ]
})
export class TransactionsModule { }
