import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestListPage } from './request-list.page';

describe('RequestListPage', () => {
  let component: RequestListPage;
  let fixture: ComponentFixture<RequestListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
