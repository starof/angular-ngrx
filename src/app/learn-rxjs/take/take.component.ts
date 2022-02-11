import { interval, takeUntil, takeWhile, switchMap, of, fromEvent, tap } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    //takeWhile
    // interval(1000).pipe(
    //   takeWhile(v=>v<10)
    // ).subscribe(console.log)

    //takeUntil
    let btn = document.getElementById('btn')!;
    
    let observable2 = fromEvent(btn,'click').pipe(switchMap(e=>of("stop").pipe(tap(console.log))));
    interval(1000).pipe(
      takeUntil(observable2)
    ).subscribe(console.log)
  }

  ngAfterViewInit(): void {
    fromEvent(document,'mousemove')
    .pipe(takeUntil(fromEvent(document.getElementById('btn2')!,'click'))).subscribe(console.log)
  }

}
