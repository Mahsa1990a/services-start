import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // 2.after adding this: angular would know how to give us an instance
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // 1.inform angular we will need instance of LoggingService class(loggingService property with type of LoggingService class)
  constructor(private loggingService: LoggingService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status); UPDATE:
   // 3.now access service:
   this.loggingService.logStatusChanged(status);
  }
}
