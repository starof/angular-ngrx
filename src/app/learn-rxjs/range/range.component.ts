import { Component, OnInit } from '@angular/core';
import { map, range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //每次发送一个值，调用一次next()
    range(1,10).subscribe(console.log)
    
    console.log("调用map操作符");
    
    range(1,10).pipe(map(v=>v*10)).subscribe(console.log)
  }

}
