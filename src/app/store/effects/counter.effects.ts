import { increment, async_increment } from './../actions/counter.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, timer } from 'rxjs';



@Injectable()
export class CounterEffects {



  constructor(private actions$: Actions) {
    // this.async_increment_effect.subscribe(console.log)
  }

  async_increment_effect = createEffect(()=>
    this.actions$.pipe(
      ofType(async_increment),
      mergeMap(()=>timer(1000).pipe(map(()=>increment({c:100})
      )),
    )));
}
