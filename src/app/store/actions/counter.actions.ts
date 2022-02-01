import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment',props<{c:number}>());
export const decrement = createAction('decrement', props<{c:number}>());




