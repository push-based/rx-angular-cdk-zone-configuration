import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiEventsComponent } from './ui-events/ui-events.component';
import {XhrComponent} from './xhr/xhr.component';
import {TimerApiComponent} from './timer-api/timer-api.component';
import { MonkeyPatchingComponent } from './monkey-patching/monkey-patching.component';
import {UnpatchEventsModule} from '@rx-angular/template';
import { DirtyChecksComponent } from './dirty-checks/dirty-checks.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [TimerApiComponent, XhrComponent, UiEventsComponent, MonkeyPatchingComponent, DirtyChecksComponent],
  exports: [
    TimerApiComponent, XhrComponent, UiEventsComponent, MonkeyPatchingComponent, DirtyChecksComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    UnpatchEventsModule
  ]
})
export class ZoneFlagExamplesModule { }
