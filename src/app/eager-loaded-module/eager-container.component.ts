import { Component, Input } from "@angular/core";

@Component({
  selector: "eager-container",
  template: `
    <h1>Eager {{ name }}!</h1>

    <monkey-patching></monkey-patching>
    <xhr></xhr>
    <timer-api></timer-api>
    <ui-events></ui-events>
  `
})
export class EagerContainerComponent {
  name: string;
}
