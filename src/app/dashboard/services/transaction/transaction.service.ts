import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Transaction {
  date: Date;
  id: string;
  amount: number;
  description: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions: Transaction[] = [];

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<Transaction[]>('assets/mock/transactions.json');
  }
}
