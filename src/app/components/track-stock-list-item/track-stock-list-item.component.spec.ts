import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackStockListItemComponent } from './track-stock-list-item.component';

describe('TrackStockListItemComponent', () => {
  let component: TrackStockListItemComponent;
  let fixture: ComponentFixture<TrackStockListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackStockListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackStockListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
