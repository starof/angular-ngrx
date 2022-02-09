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


@NgModule({
  declarations: [
    QuickStartComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    RangeComponent,
    FromComponent
  ],
  imports: [
    CommonModule,
    LearnRxjsRoutingModule
  ]
})
export class LearnRxjsModule { }
