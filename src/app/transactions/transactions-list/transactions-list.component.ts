import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Transaction, TransactionService } from 'src/app/shared/services/transaction/transaction.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent {
  transactions$: Observable<Transaction[]> = this.transactionService.getAll('date');
  columns = [
    {
      def: 'date',
      header: 'Date',
      content: (transaction: Transaction) => transaction.date
    },
    {
      def: 'id',
      header: 'Transaction ID',
      content: (transaction: Transaction) => transaction.id
    },
    {
      def: 'amount',
      header: 'Amount',
      content: (transaction: Transaction) => transaction.amount
    },
    {
      def: 'description',
      header: 'Description',
      content: (transaction: Transaction) => transaction.description
    },
    {
      def: 'category',
      header: 'Category',
      content: (transaction: Transaction) => transaction.category
    },
  ];

  constructor(
    private readonly transactionService: TransactionService,
  ) { }
}
