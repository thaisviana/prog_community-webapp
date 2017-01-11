/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoursewareComponent } from './courseware.component';

describe('CoursewareComponent', () => {
  let component: CoursewareComponent;
  let fixture: ComponentFixture<CoursewareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursewareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
