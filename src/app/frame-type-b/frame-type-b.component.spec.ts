import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTypeBComponent } from './frame-type-b.component';

describe('FrameTypeBComponent', () => {
  let component: FrameTypeBComponent;
  let fixture: ComponentFixture<FrameTypeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameTypeBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTypeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
