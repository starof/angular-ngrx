import { AppState } from './../index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterFeatureKey, State } from '../reducers/counter.reducer';

export const counterFeatureSelector = createFeatureSelector<State>(counterFeatureKey);
export const countSelector = createSelector(counterFeatureSelector,state=>state.count)
