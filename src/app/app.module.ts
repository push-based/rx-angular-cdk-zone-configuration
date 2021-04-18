import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {EagerLoadedModule} from './eager-loaded-module/eager-loaded.module';
import {XhrComponent} from './examples/xhr/xhr.component';
import {TimerApiComponent} from './examples/timer-api/timer-api.component';
import {ZoneFlagExamplesModule} from "./examples/zone-flag-examples.module";

@NgModule({
  imports: [
    BrowserModule,
    EagerLoadedModule,
    ZoneFlagExamplesModule,
    RouterModule.forRoot([
      {
        path: 'lazy',
        loadChildren: () =>
          import('./lazy-loaded-module/lazy-loaded.module').then(
            m => m.LazyLoadedModule
          )
      }
    ])
  ],
  declarations: [AppComponent],
  providers: [
    /*  {
        provide: XhrFactory,
        useExisting: UnpatchedXhrFactory
      }  */
  ],
  exports: [
    XhrComponent,
    TimerApiComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
