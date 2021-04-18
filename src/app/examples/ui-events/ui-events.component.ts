import { Component } from '@angular/core';

@Component({
  selector: 'ui-events',
  template: `
    <div class="card">
      <h2>UI Events <dirty-checks></dirty-checks></h2>
      <p>
        Use <code>zone-flags.ui-events.ts</code> in <code>polyfills.ts</code> to
        test this example in particular
      </p>
      <button (click)="onClick()" class="button outlined padding-sm">
        trigger click event
      </button>
    </div>
  `,
})
export class UiEventsComponent {
  onClick() {
    console.log('click callback');
  }
}
