import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepImportationComponent } from './step-importation.component';

describe('StepperImportationComponent', () => {
  let component: StepImportationComponent;
  let fixture: ComponentFixture<StepImportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepImportationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepImportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
