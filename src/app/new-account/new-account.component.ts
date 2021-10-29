import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // 2.after adding this: angular would know how to give us an instance
  // 1.4 add in to provider:
  // providers: [LoggingService, AccountsService] // only remove AccountsService here => we want to get it form paretn App
  providers: [LoggingService]
})
export class NewAccountComponent {
  // 1.2:
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //1. inform angular we will need instance of LoggingService class(loggingService property with type of LoggingService class)
  // 1.3 instead need to inject our accountService
  constructor(
    private loggingServiceProp: LoggingService,
    private accountServiceProp: AccountsService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // 1.1. don't need to emit anymore
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    // 1.5:
    this.accountServiceProp.addAccount(accountName, accountStatus)

    // 3.now access service:
    this.loggingServiceProp.logStatusChanged(accountStatus);

    // console.log('A server status changed, new status: ' + accountStatus); UPDATE with services
    // const service = new LoggingService();
    // service.logStatusChanged(accountStatus); update instead of access service manually
  }
}
