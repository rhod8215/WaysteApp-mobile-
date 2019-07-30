import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoAideRegPage } from './eco-aide-reg.page';

describe('EcoAideRegPage', () => {
  let component: EcoAideRegPage;
  let fixture: ComponentFixture<EcoAideRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoAideRegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoAideRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
