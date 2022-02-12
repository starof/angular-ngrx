import { Subject, of, distinctUntilChanged } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-of-distinct-until-changed',
  templateUrl: './of-distinct-until-changed.component.html',
  styleUrls: ['./of-distinct-until-changed.component.scss']
})
export class OfDistinctUntilChangedComponent implements OnInit {

  constructor() {
    //example 1
    of("a","b",[],{},true,20,null,undefined).subscribe(console.log)

    console.log("------");
    
    //example 1
    of(1, 1, 2, 2, 2, 1, 3).pipe(
      distinctUntilChanged()
    ).subscribe(console.log)

    //example 2
    const totallyDifferentBuilds$ = of(
      { engineVersion: '1.1.0', transmissionVersion: '1.2.0' },
      { engineVersion: '1.1.0', transmissionVersion: '1.4.0' },
      { engineVersion: '1.3.0', transmissionVersion: '1.4.0' },
      { engineVersion: '1.3.0', transmissionVersion: '1.5.0' },
      { engineVersion: '2.0.0', transmissionVersion: '1.5.0' }
    ).pipe(
      distinctUntilChanged((prev, curr) => {
        return (
          prev.engineVersion === curr.engineVersion ||
          prev.transmissionVersion === curr.transmissionVersion
        );
      })
    );
    totallyDifferentBuilds$.subscribe(console.log);

    //example 3
    const temps$ = of(30, 31, 20, 34, 33, 29, 35, 20);
    const recordHighs$ = temps$.pipe(
      distinctUntilChanged((prevHigh, temp) => {
        // If the current temp is less than
        // or the same as the previous record,
        // the record hasn't changed.
        return temp <= prevHigh;
      })
    );
    recordHighs$.subscribe(console.log);
    // Logs: 30, 31, 34, 35

  }

  ngOnInit(): void {
  }

}
