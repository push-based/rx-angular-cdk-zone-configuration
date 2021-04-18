import { Component } from '@angular/core';

@Component({
  selector: 'lazy-container',
  template: `
    <h1>Lazy {{ name }}!</h1>
    <input type="text" #i (input)="name = i.value" />
  `
})
export class LazyContainerComponent {
  name: string;
}
