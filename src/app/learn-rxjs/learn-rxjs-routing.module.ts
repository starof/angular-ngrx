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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRxjsRoutingModule { }
