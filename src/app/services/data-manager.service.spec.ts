import { TestBed } from '@angular/core/testing';

import { DataManagerService } from './data-manager.service';

describe('DataManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DataManagerService
    ]
  }));

  it('should be created', () => {
    const service: DataManagerService = TestBed.get(DataManagerService);
    expect(service).toBeTruthy();
  });
});
