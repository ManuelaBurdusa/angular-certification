import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackStockListComponent } from './track-stock-list.component';

describe('TrackStockListComponent', () => {
  let component: TrackStockListComponent;
  let fixture: ComponentFixture<TrackStockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackStockListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
