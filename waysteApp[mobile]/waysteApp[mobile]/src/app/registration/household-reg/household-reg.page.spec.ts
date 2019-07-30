import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdRegPage } from './household-reg.page';

describe('HouseholdRegPage', () => {
  let component: HouseholdRegPage;
  let fixture: ComponentFixture<HouseholdRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
