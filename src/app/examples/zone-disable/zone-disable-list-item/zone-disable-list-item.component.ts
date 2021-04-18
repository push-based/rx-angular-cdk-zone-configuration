import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  ElementRef,
} from '@angular/core';
import { ZoneDisableListItem } from '../model/zone-disable-list-item.interface';

@Component({
  selector: 'app-zone-disable-list-item',
  templateUrl: './zone-disable-list-item.component.html',
  styleUrls: ['./zone-disable-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneDisableListItemComponent {
  @Input() item: ZoneDisableListItem;
  elem: HTMLElement;
  constructor(private element: ElementRef) {
    this.elem = element.nativeElement;
    // requestAnimationFrame(() => {
    //   let date;
    //   for (let i = 0; i < 10000; i++) {
    //     date = new Date();
    //   }
    // });
  }

  changeColor() {
    this.elem.querySelector('div').style.color =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
