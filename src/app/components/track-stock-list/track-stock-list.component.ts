import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Stock } from 'src/app/models/Stock';
import { TrackingApiService } from 'src/app/services/tracking-api.service';

@Component({
  selector: 'app-track-stock-list',
  templateUrl: './track-stock-list.component.html',
  styleUrls: ['./track-stock-list.component.scss']
})
export class TrackStockListComponent implements OnInit, OnDestroy {
  public stocks: Stock[] = [];
  public loadedItems = false;

  private unsubscribe = new Subject();

  constructor(private trackingApiService: TrackingApiService) {
    this.trackingApiService.addedSymbol$().pipe(takeUntil(this.unsubscribe)).subscribe((symbol: string) => {
      if(symbol) {
        this.addStock(symbol);
      } else {
        trackingApiService.openSnackBar('Symbol already added in list', 'Dismiss')
      }
    }, (error) => {
      this.trackingApiService.openSnackBar(`Internal Server Error`, 'Cancel');
    })
  }

  public ngOnInit(): void {
    this.restoreFromLocalStorage();
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public addStock(symbol): void {
    this.loadedItems = false;
    this.trackingApiService.getStock$(symbol).pipe(takeUntil(this.unsubscribe)).subscribe((stock: Stock) => {
      this.loadedItems = true;
      if(!!stock.name) {
        this.stocks.push(stock);
      } else {
        this.trackingApiService.openSnackBar(`Data not found for the symbol ${symbol}`, 'Ok');
      }
    }, (error) => {
      this.loadedItems = true;
      this.trackingApiService.openSnackBar(`Internal Server Error`, 'Cancel');
    })
  }

  public removeStock($event): void {
    let index: number = this.stocks.indexOf($event);
    this.stocks.splice(index, 1);
    this.trackingApiService.removeSymbolFromStorage($event.symbol);
  }

  private restoreFromLocalStorage(): void {
    this.loadedItems = false;
    const symbols = this.trackingApiService.getSymbolsFromStorage();
    symbols.forEach(symbol => {
      this.addStock(symbol);
    });
    this.loadedItems = true;
  }

}
