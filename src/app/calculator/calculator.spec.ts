import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator } from './calculator.component';

describe('Calculator', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calculator ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
