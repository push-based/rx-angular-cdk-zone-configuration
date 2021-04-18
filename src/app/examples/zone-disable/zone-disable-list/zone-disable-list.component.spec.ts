import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDisableListComponent } from './zone-disable-list.component';

describe('ZoneDisableListComponent', () => {
  let component: ZoneDisableListComponent;
  let fixture: ComponentFixture<ZoneDisableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDisableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDisableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
