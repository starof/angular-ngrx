import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment',props<{c:number}>());
export const decrement = createAction('decrement', props<{c:number}>());

export const async_increment = createAction('async_increment',props<{c:number}>());



