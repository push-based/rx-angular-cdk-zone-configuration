import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EagerContainerComponent } from './eager-container.component';
import {ZoneFlagExamplesModule} from "../examples/zone-flag-examples.module";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'eager',
        component: EagerContainerComponent
      }
    ]),
    ZoneFlagExamplesModule
  ],
  declarations: [EagerContainerComponent]
})
export class EagerLoadedModule {}
