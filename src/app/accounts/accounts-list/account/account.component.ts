import { Component, Input } from '@angular/core';
import { Account } from '../../services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  @Input({ required: true }) account!: Account;
}
