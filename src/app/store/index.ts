import{
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './reducers/counter.reducer';


export interface AppState {

  [fromCounter.counterFeatureKey]: fromCounter.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromCounter.counterFeatureKey]: fromCounter.reducer,
};


export function logAction(reducer:ActionReducer<AppState>):ActionReducer<AppState>{
  return function(state, action){
    console.log("上一次的state",state);
    console.log("发出的action", action);
    const result = reducer(state,action);
    console.log("最新的state",result);
    return result;
  }
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logAction] : [];
