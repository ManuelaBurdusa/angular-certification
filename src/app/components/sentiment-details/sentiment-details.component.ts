import { Location } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SentimentTracking } from 'src/app/models/SentimentTracking';
import { TrackingApiService } from 'src/app/services/tracking-api.service';

@Component({
  selector: 'app-sentiment-details',
  templateUrl: './sentiment-details.component.html',
  styleUrls: ['./sentiment-details.component.scss']
})
export class SentimentDetailsComponent implements OnInit, OnDestroy {
  public trackedHistory: SentimentTracking;
  public loaded = false;
  private unsubscribe = new Subject();

  constructor(private readonly router: Router,  private readonly activatedRouted: ActivatedRoute, private readonly location: Location, private readonly trackingApiService: TrackingApiService) {
    this.getSentimentTrackingHistory(this.activatedRouted.snapshot.paramMap.get('symbol'));
   }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public navigateBack(): void {
    //OPTION 1:
    this.location.back();
    //OPTION 2:
    //this.router.navigateByUrl('');
  }

  public getSentimentTrackingHistory(symbol: string) {
    this.trackingApiService.getSentimentTrackingHistory$(symbol).subscribe(history => {
      this.trackedHistory = {
        company: this.trackingApiService.getActiveCompany(),
        symbol: symbol,
        sentimentHistory: history
      }
    }, (error) => {
      this.trackingApiService.openSnackBar(`Internal Server Error`, 'Cancel');
    })
  }

  public getMonthName(monthIndex: number): string {
    return this.trackingApiService.getMonthName(monthIndex);
  }

  public isTrackChangeIncrease(value: number) {
    return value > 0;
  }
}
