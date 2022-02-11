import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const goodsObservable = new Observable((observer)=>{
      var num=100;
      setInterval(()=>{
        observer.next(num++);
        if(num===105){
          observer.complete();
        }
      },1000)
    })
    const categoryObservable = new Observable((observer)=>{
      var num=1;
      setInterval(()=>{
        observer.next(num++);
        if(num===5){
          observer.complete();
        }
      },1000)
    })

    forkJoin({
      goods:goodsObservable,
      category:categoryObservable
    }).subscribe(console.log); //{goods: 104, category: 4}

  }

}
