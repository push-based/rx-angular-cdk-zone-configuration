import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'xhr',
  template: `
    <div class="card">
      <h2>HXR Requests <dirty-checks></dirty-checks></h2>
      <p>
        Use <code>zone-flags.xhr.ts</code> in <code>polyfills.ts</code> to test
        this example in particular
      </p>
      <button (click)="onClick()" class="button outlined mr padding-sm">
        trigger xhr within zone
      </button>
      <button
        [unpatch]
        (click)="onClick()"
        class="button outlined mr padding-sm"
      >
        trigger xhr outside zone 🤫
      </button>
    </div>
  `,
})
export class XhrComponent {
  onClick() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(console.log);
  }

  constructor(private http: HttpClient) {}
}
