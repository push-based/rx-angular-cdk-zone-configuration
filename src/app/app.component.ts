import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ul>
      <li><a routerLink="eager">eager</a></li>
      <li><a routerLink="lazy">lazy</a></li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
