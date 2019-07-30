import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreqInfoPage } from './viewreq-info.page';

describe('ViewreqInfoPage', () => {
  let component: ViewreqInfoPage;
  let fixture: ComponentFixture<ViewreqInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreqInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreqInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
