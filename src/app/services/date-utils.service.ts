import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }

  public getDateForMonth(monthNumber: number): string {
    return this.getDate(monthNumber).toISOString().slice(0, 10);
  }

  public maptoMonthName(monthNumber) {
   return this.getMonths()[monthNumber].toUpperCase();
  }

  private getMonths(): string[] {
    return ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December']
  }

  private getDate(monthNumber): Date {
    return new Date(
      new Date().getFullYear(),
      new Date().getMonth() - monthNumber,
      new Date().getDate()
  )
  }
}
