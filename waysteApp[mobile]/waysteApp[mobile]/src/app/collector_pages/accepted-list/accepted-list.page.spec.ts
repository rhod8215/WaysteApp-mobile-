import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedListPage } from './accepted-list.page';

describe('AcceptedListPage', () => {
  let component: AcceptedListPage;
  let fixture: ComponentFixture<AcceptedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
