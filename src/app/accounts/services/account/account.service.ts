import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Account {
  bankId: string;
  bankName: string;
  accountNumber: string;
  accountAlias?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<Account[]>('assets/mock/accounts.json');
  }

}
