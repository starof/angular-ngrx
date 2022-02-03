import { AppState } from './store/index';
import { counterFeatureKey, State } from './store/reducers/counter.reducer';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { increment, decrement, async_increment } from './store/actions/counter.actions';
import { Observable } from 'rxjs';
import { countSelector } from './store/selectors/counter.selectors';
import { selectCurrentRoute, selectFragment, selectQueryParam, selectQueryParams, selectRouteData } from './store/selectors/router.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count:Observable<number>;
  constructor(private store:Store<AppState>){
    this.count=this.store.pipe(select(countSelector))
    this.store.pipe(select(selectRouteData)).subscribe(console.log)
  }
  increment(){
    this.store.dispatch(increment({c:10}));
  }
  asyncIncrement(){
    this.store.dispatch(async_increment({c:100}));
  }

  decrement(){
    this.store.dispatch(decrement({c:10}));
  }
}
