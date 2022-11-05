import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './pages/balance/balance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CompanyReportComponent } from './pages/report/company-report/company-report.component';
import { ReportComponent } from './pages/report/report.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'watch-list', component: WatchListComponent },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
