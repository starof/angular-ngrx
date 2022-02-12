import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfDistinctUntilChangedComponent } from './of-distinct-until-changed.component';

describe('OfDistinctUntilChangedComponent', () => {
  let component: OfDistinctUntilChangedComponent;
  let fixture: ComponentFixture<OfDistinctUntilChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfDistinctUntilChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
