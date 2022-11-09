import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { addTransactionAction, AppState } from 'src/app/global/ngrx.state';
import { RocketMoneyCSVModel } from 'src/app/models/rocket-money-csv.model';
import { RocketMoneyCsvService } from 'src/app/services/rocket-money-csv/rocket-money-csv.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css'],
})
export class BalanceComponent implements OnInit {
  displayedColumns: string[] = [
    'Date',
    'Original Date',
    'Account Type',
    'Account Name',
    'Account Number',
    'Institution Name',
    'Name',
    'Custom Name',
    'Amount',
    'Description',
    'Category',
    'Note',
    'Ignored From',
    'Tax Deductible',
  ];
  dataSource: RocketMoneyCSVModel[] = [];

  constructor(
    private rocketMoneyCSVService: RocketMoneyCsvService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getTransactionsFromStore();
  }
  getTransactionsFromStore() {
    // Stored transactions
    this.store
      .select('transactions')
      .pipe(take(1))
      .subscribe({
        next: (transactions: RocketMoneyCSVModel[]) => {
          this.dataSource = transactions;
        },
      });
  }

  uploadFile(files: any) {
    const fileToUpload = files[0] as File;
    const reader = new FileReader();
    reader.onload = () => {
      let text: any = reader.result;

      //convert text to json here
      let json: RocketMoneyCSVModel[] =
        this.rocketMoneyCSVService.csvJSON(text);
      this.dataSource = json;
      this.dataSource.forEach((transaction: RocketMoneyCSVModel) => {
        this.store.dispatch(addTransactionAction({ transaction: transaction }));
      });
    };
    reader.readAsText(fileToUpload);
  }
}
