import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { take } from 'rxjs';
import { CONSTANTS } from 'src/app/global/constants';
import { RocketMoneyCSVModel } from 'src/app/models/rocket-money-csv.model';
import { FinnhubService } from 'src/app/services/finnhub/finnhub.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  moment = moment();
  transactions: RocketMoneyCSVModel[] = [];

  netCapital = {
    labels: ['11/01', '11/02', '11/03', '11/04', '11/05', '11/06'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgb(99, 255, 132)',
        borderColor: 'rgb(99, 255, 132)',
        data: [3, 4, 6, 7, 8, 20],
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  expensesData = {};

  constructor(
    private finnhub: FinnhubService,
    private store: Store<{ transactions: RocketMoneyCSVModel[] }>
  ) {}

  ngOnInit(): void {
    this.getTheMonthsTransactions(this.moment);
    this.loadAccountChartBasedOnTransactions(this.transactions);
    // this.finnhub.getCompanyProfile('AAPL').subscribe({
    //   next: (profile) => {
    //     console.log('Company Profile: ', profile);
    //   },
    // });
  }

  loadAccountChartBasedOnTransactions(transactions: RocketMoneyCSVModel[]) {
    // Unique Dates and Account Names
    let transactionDates = [
      ...new Set(transactions.map((transaction) => transaction.Date)),
    ];
    let accountNames = [
      ...new Set(
        transactions.map((transaction) => transaction['Account Name'])
      ),
    ];

    // Store mapped values
    let accountMaps = new Map();
    for (let i = 0; i < accountNames?.length; i++) {
      // Get all transactions under accountName
      let accountData = [];
      let currentAccountTransactions = transactions.filter(
        (transaction) => transaction['Account Name'] === accountNames[i]
      );
      for (let date of transactionDates) {
        // Get total for the date
        let total = currentAccountTransactions
          ?.filter((t) => t.Date === date)
          .reduce((prevT, currT) => prevT + Number(currT.Amount), 0);
        accountData.push(total);
      }
      // Set data for accountName
      accountMaps.set(accountNames[i], accountData);
    }

    // Assign chart data
    let colorsArr = Object.values(CONSTANTS.CHART_COLORS);
    this.expensesData = {
      labels: transactionDates,
      datasets: Array.from(accountMaps.keys()).map((accountName, index) => {
        return {
          label: accountName,
          backgroundColor: colorsArr[index % colorsArr?.length],
          borderColor: colorsArr[index % colorsArr?.length],
          data: accountMaps.get(accountName),
        };
      }),
    };
  }

  getTheMonthsTransactions(thisMonthMoment: any) {
    this.store
      .select('transactions')
      .pipe(take(1))
      .subscribe({
        next: (transactions: RocketMoneyCSVModel[]) => {
          this.transactions = transactions.filter(
            (transaction) =>
              moment(transaction.Date).format('MM/YYYY') ===
              thisMonthMoment.format('MM/YYYY')
          );

          // console.log('transactions', this.transactions);
        },
      });
  }
}
