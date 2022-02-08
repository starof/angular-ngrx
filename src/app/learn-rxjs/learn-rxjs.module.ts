import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRxjsRoutingModule } from './learn-rxjs-routing.module';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { ObservableComponent } from './observable/observable.component';


@NgModule({
  declarations: [
    QuickStartComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    LearnRxjsRoutingModule
  ]
})
export class LearnRxjsModule { }
