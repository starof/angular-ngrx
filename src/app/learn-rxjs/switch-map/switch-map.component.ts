import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReducerManager } from '@ngrx/store';
import { interval, take, Observable, range, switchMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // const observable2 = range(100,10);

    // interval(1000)
    //   .pipe(take(5),
    //   switchMap(e=>observable2)).subscribe(console.log)

  }

  ngAfterViewInit(): void {
    const btn = document.getElementById('btn')!;
    fromEvent(btn, 'click').pipe(
      switchMap(e => interval(1000))
    ).subscribe(console.log)

  }

}
