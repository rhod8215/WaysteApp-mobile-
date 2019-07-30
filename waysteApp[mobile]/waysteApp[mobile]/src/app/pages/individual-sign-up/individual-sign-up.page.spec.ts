import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSignUpPage } from './individual-sign-up.page';

describe('IndividualSignUpPage', () => {
  let component: IndividualSignUpPage;
  let fixture: ComponentFixture<IndividualSignUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualSignUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualSignUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
