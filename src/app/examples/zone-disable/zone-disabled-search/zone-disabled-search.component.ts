import { Component, ChangeDetectionStrategy, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-zone-disabled-search',
  templateUrl: './zone-disabled-search.component.html',
  styleUrls: ['./zone-disabled-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneDisabledSearchComponent {
  @Output() search = new Subject<string>();
  constructor() {}
}
