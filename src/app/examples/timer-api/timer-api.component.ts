import { Component, Input } from "@angular/core";

@Component({
  selector: "timer-api",
  template: `
    <h2>Timer APIs <dirty-checks></dirty-checks></h2>
    <p>Use <code>zone-flags.timer.ts</code> in <code>polyfills.ts</code> to test this example in particular</p>
    <button (click)="onClick()">trigger setTimeout</button>
    <br/>
    <button [unpatch] (click)="onClick()">trigger setTimeout 🤫</button>
  `
})
export class TimerApiComponent {
  onClick() {
    setTimeout(() => console.log("timer triggered"), 0);
  }
}
