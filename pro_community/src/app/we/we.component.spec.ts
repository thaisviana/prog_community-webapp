/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeComponent } from './we.component';

describe('WeComponent', () => {
  let component: WeComponent;
  let fixture: ComponentFixture<WeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
