import { Component } from '@angular/core';
import { Observable, combineLatest, map, switchMap, tap } from 'rxjs';

import { Transaction, TransactionService } from 'src/app/shared/services/transaction/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  transactions$: Observable<Transaction[]> = this.transactionService.getAll('date');
  chartData$ = this.transactions$.pipe(
    switchMap(transactions => this.transactionService.groupBy('category', transactions)),
  );
  expenses$ = this.chartData$.pipe(
    map(data => data.filter(({ value }) => value < 0)),
    tap(data => data.forEach(datum => datum.value *= -1)),
  );
  income$ = this.transactions$.pipe(
    map(transactions => transactions.filter(({ amount }) => amount > 0)),
    switchMap(transactions => this.transactionService.groupBy('description', transactions)),
  );
  totals$ = combineLatest([this.income$, this.expenses$]).pipe(
    map(([income, expenses]) => [
      {
        name: 'Income',
        value: income.reduce((acc, { value }) => acc + value, 0)
      },
      {
        name: 'Expenses',
        value: expenses.reduce((acc, { value }) => acc + value, 0)
      }
    ]),
  );

  constructor(
    private readonly transactionService: TransactionService,
  ) { }
}
