/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OneArticleComponent } from './one-article.component';

describe('OneArticleComponent', () => {
  let component: OneArticleComponent;
  let fixture: ComponentFixture<OneArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
