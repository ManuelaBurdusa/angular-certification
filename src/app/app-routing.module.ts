import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentimentDetailsComponent } from './components/sentiment-details/sentiment-details.component';
import { TrackStockComponent } from './components/track-stock/track-stock.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'track-stock' },
  { path: '', component: TrackStockComponent },
  {path: 'sentiment/:symbol', component: SentimentDetailsComponent},
  { path: '**', component: TrackStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
