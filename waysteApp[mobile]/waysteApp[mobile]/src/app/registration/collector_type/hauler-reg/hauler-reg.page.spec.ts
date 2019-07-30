import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaulerRegPage } from './hauler-reg.page';

describe('HaulerRegPage', () => {
  let component: HaulerRegPage;
  let fixture: ComponentFixture<HaulerRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaulerRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaulerRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
