import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackpagePage } from './trackpage.page';

describe('TrackpagePage', () => {
  let component: TrackpagePage;
  let fixture: ComponentFixture<TrackpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
