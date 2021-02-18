import { TestBed } from '@angular/core/testing';

import { YourChoiceService } from './your-choice.service';

describe('YourChoiceService', () => {
  let service: YourChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YourChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
