import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxWithTimesComponent } from './inbox-with-times/inbox-with-times.component';

@NgModule({
  declarations: [
    InboxWithTimesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InboxWithTimesComponent
  ]
})
export class SharedComponentsModule { }
