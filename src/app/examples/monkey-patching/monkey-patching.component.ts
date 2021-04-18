import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'monkey-patching',
  template: `
    <h2>Monkey Patching
      <dirty-checks></dirty-checks>
    </h2>
    <p>
      <code>zone.js</code> patches global Brower API
    </p>
    <button (click)="patchClickListener()">
      Monkey patch click
    </button>
    <button [unpatch] (click)="noop()">
      test by click
    </button>
  `
})
export class MonkeyPatchingComponent implements OnInit {

  constructor() {
  }

  patchClickListener(): void {
    console.log('patchClickListener');
    const originalAPI = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = (eventName: any, originalCallback: any, useCapture: any) => {
      console.log('in addEventListener');
      return originalAPI.apply(this, [eventName, originalCallback, useCapture]);
    }
  }

  noop() {
    // No operation
    console.log('noop');
  }

  ngOnInit(): void {
  }


}
