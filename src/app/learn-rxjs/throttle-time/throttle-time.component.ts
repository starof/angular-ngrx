import { Component, OnInit, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.scss']
})
export class ThrottleTimeComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //example 1
    // fromEvent(document,'mousemove')
    // .pipe(
    //   throttleTime(2000)
    // ).subscribe(console.log)
   
    //example 2
    //throttleTime 1s内只响应一次
    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(throttleTime(1000));
    // result.subscribe(x => console.log(x));

    //debounceTime 停止点击事件后1s响应
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(debounceTime(1000));
    result.subscribe(x => console.log(x));
  }

}
