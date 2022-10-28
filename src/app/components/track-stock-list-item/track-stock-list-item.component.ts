import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../../models/Stock';
import { TrackingApiService } from '../../services/tracking-api.service';

@Component({
  selector: 'app-track-stock-list-item',
  templateUrl: './track-stock-list-item.component.html',
  styleUrls: ['./track-stock-list-item.component.scss']
})
export class TrackStockListItemComponent implements OnInit {
  @Input() public currentStock: Stock;

  @Output() private removeStock: EventEmitter<Stock> = new EventEmitter();

  constructor(private router: Router, private trackingApiService: TrackingApiService) { }

  public ngOnInit(): void {
  }

  public removeItem(): void {
    this.removeStock.emit(this.currentStock);
  }

  public navigateToSentimentDetails(): void {
    this.trackingApiService.setActiveCompanyName(this.currentStock.name);
    this.router.navigateByUrl(`sentiment/${this.currentStock.id}`);
  }

  public isIncreasing(stock) {
    return stock > 0;
  }
}
