import { Action, createReducer, on } from '@ngrx/store';

//状态名称
export const counterFeatureKey = 'counter';
//状态类型接口
export interface State {

}
//初始状态
export const initialState: State = {

};
//创建reducer
export const reducer = createReducer(
  initialState,

);
