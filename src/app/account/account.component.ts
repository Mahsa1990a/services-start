import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // 2.after adding this: angular would know how to give us an instance
   // 1.4 add in to provider
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // 1.2:
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // 1.inform angular we will need instance of LoggingService class(loggingService property with type of LoggingService class)
 // 1.3 instead need to inject our accountService
  constructor(
    private loggingService: LoggingService,
    private accountServiceProp: AccountsService
    ) {}

  onSetTo(status: string) {
    // 1.1. don't need to emit anymore
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status); UPDATE:

    // 3.now access service:
   this.loggingService.logStatusChanged(status);

   // 1.5:
   this.accountServiceProp.updateStatus(this.id, status)
  }
}
