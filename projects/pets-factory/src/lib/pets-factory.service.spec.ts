import { TestBed } from '@angular/core/testing';

import { PetsFactoryService } from './pets-factory.service';

describe('PetsFactoryService', () => {
  let service: PetsFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
