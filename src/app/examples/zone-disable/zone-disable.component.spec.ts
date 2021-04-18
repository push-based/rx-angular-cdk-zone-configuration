import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDisableComponent } from './zone-disable.component';

describe('ZoneDisableComponent', () => {
  let component: ZoneDisableComponent;
  let fixture: ComponentFixture<ZoneDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
