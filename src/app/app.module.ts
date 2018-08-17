import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
