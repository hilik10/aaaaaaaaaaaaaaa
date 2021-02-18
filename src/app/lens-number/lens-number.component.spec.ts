import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensNumberComponent } from './lens-number.component';

describe('LensNumberComponent', () => {
  let component: LensNumberComponent;
  let fixture: ComponentFixture<LensNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LensNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LensNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
