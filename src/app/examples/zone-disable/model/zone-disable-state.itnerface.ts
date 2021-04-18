import { ZoneDisableListItem } from './zone-disable-list-item.interface';
import { ZoneDisableList } from './zone-disable-list.interface';

export interface ZoneDisableState {
  items: ZoneDisableListItem[];
  search: string;
}
