import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRxjsRoutingModule } from './learn-rxjs-routing.module';
import { QuickStartComponent } from './quick-start/quick-start.component';


@NgModule({
  declarations: [
    QuickStartComponent
  ],
  imports: [
    CommonModule,
    LearnRxjsRoutingModule
  ]
})
export class LearnRxjsModule { }
