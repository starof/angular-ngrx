import { OfDistinctUntilChangedComponent } from './of-distinct-until-changed/of-distinct-until-changed.component';
import { ThrottleTimeComponent } from './throttle-time/throttle-time.component';
import { TakeComponent } from './take/take.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { FromComponent } from './from/from.component';
import { RangeComponent } from './range/range.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { ObservableComponent } from './observable/observable.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:QuickStartComponent
  },
  {
    path:'observable',
    component:ObservableComponent
  },
  {
    path:'subject',
    component:SubjectComponent
  },
  {
    path:'behavior-subject',
    component:BehaviorSubjectComponent
  },
  {
    path:'replay-subject',
    component:ReplaySubjectComponent
  },
  {
    path:'range',
    component:RangeComponent
  },
  {
    path:'from',
    component:FromComponent
  },
  {
    path:'fork-join',
    component:ForkJoinComponent
  },
  {
    path:'from-event',
    component:FromEventComponent
  },
  {
    path:'switch-map',
    component:SwitchMapComponent
  },
  {
    path:'take',
    component:TakeComponent
  },
  {
    path:'throttle',
    component:ThrottleTimeComponent
  },
  {
    path:'distinctUntilChanged',
    component:OfDistinctUntilChangedComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRxjsRoutingModule { }
