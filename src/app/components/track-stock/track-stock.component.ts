import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { Stock } from 'src/app/models/Stock';
import { TrackingApiService } from 'src/app/services/tracking-api.service';

@Component({
  selector: 'app-track-stock',
  templateUrl: './track-stock.component.html',
  styleUrls: ['./track-stock.component.scss']
})
export class TrackStockComponent implements OnInit {
  public trackStockForm = this.formBuilder.group({
    symbol: ['', [Validators.required]],
  });


  constructor(private readonly formBuilder: FormBuilder, private readonly trackingApiService: TrackingApiService) { }

  ngOnInit(): void {
  }

  public trackStock(): void {
    this.trackingApiService.addNewSymbol(this.trackStockForm.controls['symbol'].value.toUpperCase());
    this.trackStockForm.reset();
  }


}
