import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  @Input() transaction?: Transaction;
}
