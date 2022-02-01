import { AppState } from './store/index';
import { counterFeatureKey } from './store/reducers/counter.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './store/actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private store:Store<AppState>){
    this.store.select('counter').subscribe(console.log);
  }
  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }
}
