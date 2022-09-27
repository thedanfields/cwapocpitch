export interface ITimeService {
  getCurrentTime(timeZone: string): Date;
}

export class TimeService implements ITimeService {
  getCurrentTime(timeZone: string): Date {
    return new Date(
      new Date().toLocaleString("en-US", {
        timeZone: timeZone,
      })
    );
  }
}
