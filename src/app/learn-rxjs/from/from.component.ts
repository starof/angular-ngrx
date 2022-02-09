import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //数组,promise,迭代器转为可观察对象
    let arr=[1,2,3,4,5];
    from(arr).subscribe(console.log)

    //把promise转为Observable
    function p(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve({a:"hello"})
        },1000)
      })
    }
    from(p()).subscribe(console.log)
  }

}
