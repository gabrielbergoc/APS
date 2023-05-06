import { Component } from '@angular/core';
import { Transaction, TransactionService } from '../services/transaction/transaction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  transactions$: Observable<Transaction[]> = this.transactionService.getAll();
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
