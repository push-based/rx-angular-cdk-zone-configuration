import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDisableListItemComponent } from './zone-disable-list-item.component';

describe('ZoneDisableListItemComponent', () => {
  let component: ZoneDisableListItemComponent;
  let fixture: ComponentFixture<ZoneDisableListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDisableListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDisableListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
