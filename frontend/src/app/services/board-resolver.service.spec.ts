import { TestBed } from '@angular/core/testing';

import { BoardResolverService } from './board-resolver.service';

describe('BoardResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardResolverService = TestBed.get(BoardResolverService);
    expect(service).toBeTruthy();
  });
});
