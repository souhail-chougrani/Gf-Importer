import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMappingColumnsComponent } from './step-mapping-columns.component';

describe('StepMappingColumnsComponent', () => {
  let component: StepMappingColumnsComponent;
  let fixture: ComponentFixture<StepMappingColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepMappingColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepMappingColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
