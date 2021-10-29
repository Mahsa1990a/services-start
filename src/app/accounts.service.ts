import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// we should attach meta data when we're using service into anothe service
// Injectable says this service is injectable or can other service inject to it
// you add Injectable in service you want to inject another service(the recieving service)
@Injectable()

export class AccountsService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  // This is the place the status change
  // 1. So we can call logStatusChanged from LoggingService here:

  constructor(private loggingServiceProp: LoggingService) {}

  addAccount(name: string, status: string) {
    // this.accounts.push({name: name, status: status}); OR
    this.accounts.push({name, status});
    // 2.then we have to add it here:
    this.loggingServiceProp.logStatusChanged(status);
  }
  updateStatus(id: number, statusArg: string) {
    this.accounts[id].status = statusArg;
    this.loggingServiceProp.logStatusChanged(statusArg);
  }
}
