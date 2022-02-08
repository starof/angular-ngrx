import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let replaySubjectDemo = new ReplaySubject();
    replaySubjectDemo.subscribe(v=>console.log("第一个观察者",v));
    
    replaySubjectDemo.next(1)
    replaySubjectDemo.subscribe(v=>console.log("第二个观察者",v));
    replaySubjectDemo.next(2)
    replaySubjectDemo.next(3)
    replaySubjectDemo.next(4)

    replaySubjectDemo.subscribe(v=>console.log("第三个观察者",v)); //第三个观察者可以拿到1，2，3，4
  }

}
