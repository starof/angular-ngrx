import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const behaviorSubjectDemo = new BehaviorSubject("默认值");
    behaviorSubjectDemo.subscribe((v)=>console.log(v))
    behaviorSubjectDemo.next("第二个值")
  }

}
