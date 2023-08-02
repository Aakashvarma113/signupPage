import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryStateComponent } from './add-country-state.component';

describe('AddCountryStateComponent', () => {
  let component: AddCountryStateComponent;
  let fixture: ComponentFixture<AddCountryStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCountryStateComponent]
    });
    fixture = TestBed.createComponent(AddCountryStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
