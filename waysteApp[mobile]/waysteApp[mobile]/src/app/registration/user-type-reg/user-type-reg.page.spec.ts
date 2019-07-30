import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeRegPage } from './user-type-reg.page';

describe('UserTypeRegPage', () => {
  let component: UserTypeRegPage;
  let fixture: ComponentFixture<UserTypeRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTypeRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
