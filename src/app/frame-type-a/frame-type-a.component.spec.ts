import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameTypeAComponent } from './frame-type-a.component';

describe('FrameTypeAComponent', () => {
  let component: FrameTypeAComponent;
  let fixture: ComponentFixture<FrameTypeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameTypeAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameTypeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
