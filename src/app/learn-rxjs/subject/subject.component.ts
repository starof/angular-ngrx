import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let demoSubject = new Subject();
    //订阅的时候不会立即执行
    demoSubject.subscribe((v)=>console.log("observer1" , v))
    demoSubject.subscribe((v)=>console.log("observer2" , v))
    setTimeout(()=>{
      demoSubject.next(1);
    },3000)
  }

}
