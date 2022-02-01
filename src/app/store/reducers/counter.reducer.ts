import { decrement } from './../actions/counter.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { increment } from '../actions/counter.actions';

//状态名称
export const counterFeatureKey = 'counter';
//状态类型接口
export interface State {
  count:number
}
//初始状态
export const initialState: State = {
  count:0
};
//创建reducer
export const reducer = createReducer(
  initialState,
  on(increment,(state,action)=>({
      ...state,
      count:state.count+action.c}
      )),
  on(decrement,(state,action)=>({...state,count:state.count-action.c}))

);
