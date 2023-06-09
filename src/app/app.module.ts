import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CurrencyPipe } from '@angular/common';
import { AccountsModule } from './accounts/accounts.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    UserModule,
    HomeModule,
    TransactionsModule,
    AccountsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CurrencyPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
