import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ZoneDisableListItem } from '../model/zone-disable-list-item.interface';
import { ZoneDisableList } from '../model/zone-disable-list.interface';

@Component({
  selector: 'app-zone-disable-list',
  templateUrl: './zone-disable-list.component.html',
  styleUrls: ['./zone-disable-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneDisableListComponent {
  @Input() list: ZoneDisableList;

  constructor() {}
  trackItem(index, item: ZoneDisableListItem) {
    return item.id;
  }
}
