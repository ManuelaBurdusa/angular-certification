import { Injectable } from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ACCESS_TOKEN, COMPANY, QUOTES, SENTIMENT_TRACKING, STORAGE_COMPANY, STORAGE_TRACKING_KEY, URL } from '../utils/Utils';
import { Quote } from '../models/Quote';
import {map} from 'rxjs/operators';
import { Stock } from '../models/Stock';
import { Sentiment } from '../models/Sentiment';
import { DateUtilsService } from './date-utils.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TrackingApiService {
  private symbols: string[] = [];
  private _addedSymbol: Subject<string> = new Subject<string>();

  constructor(private readonly localStorageService: LocalStorageService, private httpClient: HttpClient, private dateUtils: DateUtilsService, private snackBar: MatSnackBar) { }

  public addNewSymbol(symbol: string): void {
    this.symbols = this.getSymbolsFromStorage();
    const foundSymbol = this.symbols?.find(item => item?.toLowerCase() === symbol.toLowerCase());
    if(!foundSymbol) {
      this.symbols.push(symbol);
      this._addedSymbol.next(symbol);
      this.localStorageService.setStorageItem(STORAGE_TRACKING_KEY, this.symbols);
    } else {
      this._addedSymbol.next(null);
    }
  }

  public addedSymbol$(): Observable<string> {
    return this._addedSymbol.asObservable();
  }

  public getSymbolsFromStorage(): string[] | [] {
    const foundSymbols = this.localStorageService.getStorageItem(STORAGE_TRACKING_KEY);
    return !!foundSymbols ? foundSymbols: [];
  }

  public removeSymbolFromStorage(symbol: string): void {
    const trackedSymbols = this.getSymbolsFromStorage();
    const trackIndex = trackedSymbols.findIndex(item => item.toLowerCase() === symbol.toLowerCase());
    trackedSymbols.splice(trackIndex, 1);
    this.localStorageService.setStorageItem(STORAGE_TRACKING_KEY, trackedSymbols);
  }

  public getQuote$(trackedSymbol: string): Observable<Quote> {
    let params = this.appendToken();
    params = params.append('symbol', trackedSymbol);
    return this.httpClient.get<Quote>(`${URL}${QUOTES}`, {params: params});
  }

  public getCompany$(trackedSymbol: string): Observable<string> {
    let params = this.appendToken();
    params = params.append('symbol', trackedSymbol);
    return this.httpClient.get<string>(`${URL}${COMPANY}`, {params: params})
  }

  public getStock$(trackedSymbol: string): Observable<Stock> {
    return combineLatest([this.getQuote$(trackedSymbol), this.getCompany$(trackedSymbol)])
    .pipe(map(([quote, company]) => {
       return {
        id: trackedSymbol,
        name: company['name'],
        symbol: trackedSymbol,
        quote: quote
      } as Stock}));
  }

  public setActiveCompanyName(value: string): void {
    this.localStorageService.setStorageItem(STORAGE_COMPANY, value);
  }

  public getActiveCompany():  string {
    return this.localStorageService.getStorageItem(STORAGE_COMPANY)?.toString();
  }

  public getSentimentTrackingHistory$(trackedSymbol: string):Observable<Sentiment[]> {
    let params = this.appendToken();
    params = params.append('from', this.dateUtils.getDateForMonth(3));
    params = params.append('to', this.dateUtils.getDateForMonth(1));
    params = params.append('symbol', trackedSymbol);

    return this.httpClient.get<Sentiment[]>(`${URL}${SENTIMENT_TRACKING}`, {params: params}).pipe(map(item => item["data"]));
  }

  public getMonthName(monthIndex: number): string {
    return this.dateUtils.maptoMonthName(monthIndex);
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

  private appendToken(): HttpParams {
    let params = new HttpParams();
    params = params.append('token', ACCESS_TOKEN);
    return params;
  }
}
