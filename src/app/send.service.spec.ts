/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SendService } from './send.service';

describe('SendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendService]
    });
  });

  it('should ...', inject([SendService], (service: SendService) => {
    expect(service).toBeTruthy();
  }));
});
