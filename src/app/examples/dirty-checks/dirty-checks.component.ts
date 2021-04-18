import { Component, ElementRef } from "@angular/core";

@Component({
  selector: "dirty-checks",
  template: `
  <code>{{renders()}}</code>
  `
})
export class DirtyChecksComponent {
  private _renders = 0;

  constructor(private elem: ElementRef) {
  }

  renders() {
    this.elem.nativeElement.children[0].innerHTML = ++this._renders;
  }

}
