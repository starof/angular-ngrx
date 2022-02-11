import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {filter, fromEvent, map, pluck, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit {
  @ViewChild("nameInput") nameInput!:ElementRef;
  constructor() { }

  ngOnInit(): void {

    
  }
  ngAfterViewInit(){
    fromEvent<KeyboardEvent>(this.nameInput.nativeElement,'keyup').pipe(
      filter(e=>e.key==="Enter"),
      // tap(console.log),
      // map(e=>(<HTMLInputElement>e.target).value)
      pluck('target','value')
    ).subscribe(console.log)

    const btn = document.getElementById("btn")!;
    fromEvent(btn,'click')
    .pipe(
      pluck('target')
    ).subscribe(console.log)
  }

}
