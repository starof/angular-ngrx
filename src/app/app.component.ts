import { AppState } from './store/index';
import { counterFeatureKey, State } from './store/reducers/counter.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './store/actions/counter.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter:Observable<State>;
  constructor(private store:Store<AppState>){
    this.counter=this.store.select(counterFeatureKey)
  }
  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }
}
