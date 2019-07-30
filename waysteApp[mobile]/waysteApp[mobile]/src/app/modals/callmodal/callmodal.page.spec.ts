import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallmodalPage } from './callmodal.page';

describe('CallmodalPage', () => {
  let component: CallmodalPage;
  let fixture: ComponentFixture<CallmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
