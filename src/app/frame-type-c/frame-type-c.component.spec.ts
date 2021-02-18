import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTypeCComponent } from './frame-type-c.component';

describe('FrameTypeCComponent', () => {
  let component: FrameTypeCComponent;
  let fixture: ComponentFixture<FrameTypeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameTypeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTypeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
