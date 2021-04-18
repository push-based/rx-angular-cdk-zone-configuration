import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="tabs">
      <a routerLink="eager" class="padding mr button">eager module</a>
      <a routerLink="lazy" class="padding button">lazy module</a>
    </div>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
