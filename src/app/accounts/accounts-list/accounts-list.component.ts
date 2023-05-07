import { Component } from '@angular/core';
import { AccountService } from '../services/account/account.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent {
  accounts$ = this.accountService.getAll();

  constructor(
    private readonly accountService: AccountService,
  ) { }
}
