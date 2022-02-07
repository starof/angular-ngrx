import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss']
})
export class QuickStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //new Observable的时候传递一个函数，函数的参数是observer对象，在函数内部执行异步操作
    const observable = new Observable((observer)=>{
      setTimeout(()=>{
        observer.next({name:"张三"})
      },2000)
    });

    //observer是一个对象，观察者是一个对象，对象中有一个next属性，它是一个方法
    const observer= {
      next:(value:any)=>{
        console.log(value);
        
      }
    };

    observable.subscribe(observer); 
  }

}
