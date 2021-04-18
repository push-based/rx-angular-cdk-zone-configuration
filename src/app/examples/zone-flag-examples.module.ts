import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiEventsComponent } from './ui-events/ui-events.component';
import { XhrComponent } from './xhr/xhr.component';
import { TimerApiComponent } from './timer-api/timer-api.component';
import { MonkeyPatchingComponent } from './monkey-patching/monkey-patching.component';
import { UnpatchEventsModule } from '@rx-angular/template';
import { DirtyChecksComponent } from './dirty-checks/dirty-checks.component';
import { HttpClientModule } from '@angular/common/http';
import { ZoneDisableComponent } from './zone-disable/zone-disable.component';
import { ZoneDisableListComponent } from './zone-disable/zone-disable-list/zone-disable-list.component';
import { ZoneDisabledSearchComponent } from './zone-disable/zone-disabled-search/zone-disabled-search.component';
import { ZoneDisableListItemComponent } from './zone-disable/zone-disable-list-item/zone-disable-list-item.component';

@NgModule({
  declarations: [
    TimerApiComponent,
    XhrComponent,
    UiEventsComponent,
    MonkeyPatchingComponent,
    DirtyChecksComponent,
    ZoneDisableComponent,
    ZoneDisableListComponent,
    ZoneDisabledSearchComponent,
    ZoneDisableListItemComponent,
  ],
  exports: [
    TimerApiComponent,
    XhrComponent,
    UiEventsComponent,
    MonkeyPatchingComponent,
    DirtyChecksComponent,
    ZoneDisableComponent,
    ZoneDisableListComponent,
    ZoneDisabledSearchComponent,
    ZoneDisableListItemComponent,
  ],
  imports: [HttpClientModule, CommonModule, UnpatchEventsModule],
})
export class ZoneFlagExamplesModule {}
