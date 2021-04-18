import { LazyContainerComponent } from './lazy-container.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ZoneFlagExamplesModule} from "../examples/zone-flag-examples.module";

@NgModule({
  imports: [
    ZoneFlagExamplesModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyContainerComponent
      }
    ])
  ],
  declarations: [LazyContainerComponent]
})
export class LazyLoadedModule {}
