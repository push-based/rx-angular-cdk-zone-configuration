import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ZoneDisableListItem} from '../model/zone-disable-list-item.interface';
import {Observable} from "rxjs";

@Component({
    selector: 'app-zone-disable-list',
    templateUrl: './zone-disable-list.component.html',
    styleUrls: ['./zone-disable-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneDisableListComponent {

    @Input()
    items$: Observable<ZoneDisableListItem[]>;

    total: number;
    items: ZoneDisableListItem[];

    @Input('items')
    set _items(items: ZoneDisableListItem[]) {
        this.items = items;
        this.total = items.length;
    }

    constructor() {
    }

    trackItem(index, item: ZoneDisableListItem) {
        return item.id;
    }
}
