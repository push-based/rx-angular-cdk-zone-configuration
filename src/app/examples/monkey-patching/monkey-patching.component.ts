import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monkey-patching',
  template: `
    <div class="card">
      <h2>
        Monkey Patching
        <dirty-checks></dirty-checks>
      </h2>
      <p><code>zone.js</code> patches global Brower API</p>
      <button
        (click)="patchClickListener()"
        class="button outlined padding-sm mr"
      >
        Monkey patch click
      </button>
      <button (click)="noop()" class="button outlined padding-sm">
        test guess {{num}}
      </button>
    </div>
  `,
})
export class MonkeyPatchingComponent implements OnInit {
  num = 0;
  constructor() {}

  patchClickListener(): void {
    console.log('patchClickListener');
    const originalAPI = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = (
      eventName: any,
      originalCallback: any,
      useCapture: any
    ) => {
      console.log('in addEventListener');
      return originalAPI.apply(this, [eventName, originalCallback, useCapture]);
    };
  }

  noop() {
    // No operation
    console.log('noop');
    ++this.num;
  }

  ngOnInit(): void {}
}
