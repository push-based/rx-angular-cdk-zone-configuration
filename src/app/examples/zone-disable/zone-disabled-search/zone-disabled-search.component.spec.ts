import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDisabledSearchComponent } from './zone-disabled-search.component';

describe('ZoneDisabledSearchComponent', () => {
  let component: ZoneDisabledSearchComponent;
  let fixture: ComponentFixture<ZoneDisabledSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDisabledSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDisabledSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
