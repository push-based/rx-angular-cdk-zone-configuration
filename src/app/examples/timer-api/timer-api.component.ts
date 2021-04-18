import { Component, Input } from '@angular/core';

@Component({
  selector: 'timer-api',
  template: `
    <div class="card">
      <h2>Timer APIs <dirty-checks></dirty-checks></h2>
      <p>
        Use <code>zone-flags.timer.ts</code> in <code>polyfills.ts</code> to
        test this example in particular
      </p>
      <button (click)="onClick()" class="button outlined mr padding-sm">
        trigger setTimeout
      </button>
      <button [unpatch] (click)="onClick()" class="button outlined padding-sm">
        trigger setTimeout 🤫
      </button>
    </div>
  `,
})
export class TimerApiComponent {
  onClick() {
    setTimeout(() => console.log('timer triggered'), 0);
  }
}
