import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil, tap, debounceTime } from 'rxjs/operators';
import { ZoneDisableList } from './model/zone-disable-list.interface';
import { ZoneDisableState } from './model/zone-disable-state.itnerface';
import { guitaristsList } from './utils/guitarists-list.constant';
import {ZoneDisableListItem} from "./model/zone-disable-list-item.interface";

@Component({
  selector: 'zone-disable',
  templateUrl: './zone-disable.component.html',
  styleUrls: ['./zone-disable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneDisableComponent implements OnDestroy {
  private unsubscribe$ = new Subject();

  state$ = new BehaviorSubject<ZoneDisableState>({
    items: guitaristsList,
    search: '',
  });

  list$: Observable<ZoneDisableListItem[]> = this.state$.pipe(
    map((state) => {
      const items = state.items?.filter((i) =>
        i.name?.toLowerCase().includes(state.search?.toLowerCase())
      );
      return items;
    })
  );

  searchEvent$ = new Subject<string>();
  constructor(private cdRef: ChangeDetectorRef) {
    this.searchEvent$
      .pipe(
        debounceTime(200),
        tap((search) => this.state$.next({ ...this.snapshot, search })),
        tap(() => this.cdRef.detectChanges()),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private get snapshot() {
    return this.state$.getValue();
  }
}
