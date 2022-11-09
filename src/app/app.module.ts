import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinnhubService } from './services/finnhub/finnhub.service';
import { ReportComponent } from './pages/report/report.component';
import { CompanyReportComponent } from './pages/report/company-report/company-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { TemplatesModule } from './templates/templates.module';
import { BalanceComponent } from './pages/balance/balance.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';
import { RocketMoneyCsvService } from './services/rocket-money-csv/rocket-money-csv.service';
import { StoreModule } from '@ngrx/store';
import { transactionsReducer } from './global/ngrx.state';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportComponent,
    CompanyReportComponent,
    BalanceComponent,
    WatchListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    TemplatesModule,
    StoreModule.forRoot({
      transactions: transactionsReducer,
    }),
  ],
  providers: [FinnhubService, RocketMoneyCsvService],
  bootstrap: [AppComponent],
})
export class AppModule {}
