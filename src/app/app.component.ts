import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService] The highest level of putting service there is app.module.ts
})
export class AppComponent implements OnInit {

  // type is arr of obj
  accounts: {name: string, status: string}[] = [];

  constructor(private accountServiceProp: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountServiceProp.accounts;
  }

  // After moving accounts arr into AccountService class we don't neet this anymore:

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
