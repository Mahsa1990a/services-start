import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // 2.after adding this: angular would know how to give us an instance
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //1. inform angular we will need instance of LoggingService class(loggingService property with type of LoggingService class)
  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    // 3.now access service:
    this.loggingService.logStatusChanged(accountStatus);

    // console.log('A server status changed, new status: ' + accountStatus); UPDATE with services
    // const service = new LoggingService();
    // service.logStatusChanged(accountStatus); update instead of access service manually
  }
}
