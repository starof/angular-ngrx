import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  timer:any;
  constructor() { }

  ngOnInit(): void {
    
    //new Observable的时候传递一个函数，函数的参数是observer对象，在函数内部执行异步操作
    const observable = new Observable((observer)=>{
      let index=0;
      this.timer=setInterval(()=>{
        
        console.log("complete了timer还在");
        
        observer.next(index++);
        console.log("这句会打印");
        
        if(index===3){
          observer.complete();
        }
      },1000)
    });

    //observer是一个对象，观察者是一个对象，对象中有一个next属性，它是一个方法
    const observer= {
      next:(value:any)=>{
        console.log(value);
      },
      complete:()=>{
        console.log("结束了");
        // clearInterval(this.timer);
      }
    };

    observable.subscribe(observer); 
  }

}
