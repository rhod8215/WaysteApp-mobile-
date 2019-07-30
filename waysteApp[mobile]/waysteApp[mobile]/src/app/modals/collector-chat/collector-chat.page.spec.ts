import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorChatPage } from './collector-chat.page';

describe('CollectorChatPage', () => {
  let component: CollectorChatPage;
  let fixture: ComponentFixture<CollectorChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
