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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRxjsRoutingModule { }
