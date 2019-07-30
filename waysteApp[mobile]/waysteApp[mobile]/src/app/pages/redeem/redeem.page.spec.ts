import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPage } from './redeem.page';

describe('RedeemPage', () => {
  let component: RedeemPage;
  let fixture: ComponentFixture<RedeemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
