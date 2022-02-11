import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRxjsRoutingModule } from './learn-rxjs-routing.module';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { RangeComponent } from './range/range.component';
import { FromComponent } from './from/from.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { FromEventComponent } from './from-event/from-event.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';


@NgModule({
  declarations: [
    QuickStartComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    RangeComponent,
    FromComponent,
    ForkJoinComponent,
    FromEventComponent,
    SwitchMapComponent,
    TakeComponent,
    ThrottleTimeComponent
  ],
  imports: [
    CommonModule,
    LearnRxjsRoutingModule
  ]
})
export class LearnRxjsModule { }
