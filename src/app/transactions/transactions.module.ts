import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionComponent } from './transactions-list/transaction/transaction.component';
import { CategoryToIconPipe } from './transactions-list/transaction/pipe/category-to-icon.pipe';



@NgModule({
  declarations: [
    TransactionsListComponent,
    TransactionComponent,
    CategoryToIconPipe,
  ],
  imports: [
    SharedModule,
  ]
})
export class TransactionsModule { }
