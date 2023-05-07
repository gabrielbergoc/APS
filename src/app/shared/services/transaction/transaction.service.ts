import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, shareReplay, tap } from 'rxjs';

export interface Transaction {
  date: Date;
  id: string;
  amount: number;
  description: string;
  category: string;
  bank: string;
  account: string;
  accountAlias: string;
  method: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAll(orderBy?: keyof Transaction, order: 'asc' | 'desc' = 'asc'): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('assets/mock/transactions.json')
      .pipe(
        map(transactions => {
          if (!orderBy) {
            return transactions;
          }

          if (order === 'asc') {
            return transactions.sort((a, b) => a[orderBy] > b[orderBy] ? 1 : -1);
          }
          if (order === 'desc') {
            return transactions.sort((a, b) => a[orderBy] < b[orderBy] ? 1 : -1);
          }

          throw new Error(`Invalid order: ${order}`);
        }),
        shareReplay(1),
      );
  }

  groupBy(property: keyof Transaction, transactions?: Transaction[], order: 'asc' | 'desc' | 'none' = 'asc') {
    return (transactions ? of(transactions) : this.getAll()).pipe(
      map((transactions: Transaction[]) =>
        transactions.reduce((acc, transaction) => {
          let key = transaction[property];
          if (key instanceof Date) {
            key = key.toISOString().split('T')[0];
          }
          if (!acc[key]) {
            acc[key] = 0;
          }
          acc[key] += transaction.amount;
          return acc;
        }, {} as { [key: string]: number })
      ),
      map(data => Object.entries(data)),
      map(data => data.map(([name, value]) => ({ name, value }))),
      map(data =>
        order === 'asc'
          ? data.sort((a, b) => a.value - b.value)
          : order === 'desc'
            ? data.sort((a, b) => b.value - a.value)
            : data
      ),
    )
  }
}
