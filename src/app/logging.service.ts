// service is a typescript class
export class LoggingService {

  // creating new method for logging
  logStatusChanged(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}

// so now we can use this service instead og logs in another components:
// const service = new LoggingService();
// service.logStatusChanged(accountStatus);
