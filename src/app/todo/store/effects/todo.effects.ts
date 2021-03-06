import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as TodoActions from '../actions/todo.actions';


@Injectable()
export class TodoEffects {


  yTodos$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TodoActions.addTodo),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });


  constructor(private actions$: Actions) {}

}
