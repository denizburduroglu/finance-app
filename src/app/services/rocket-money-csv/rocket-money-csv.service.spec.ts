import { TestBed } from '@angular/core/testing';

import { RocketMoneyCsvService } from './rocket-money-csv.service';

describe('RocketMoneyCsvService', () => {
  let service: RocketMoneyCsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketMoneyCsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
