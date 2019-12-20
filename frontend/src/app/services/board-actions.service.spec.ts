import { TestBed } from '@angular/core/testing';

import { BoardActionsService } from './board-actions.service';

describe('NotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardActionsService = TestBed.get(BoardActionsService);
    expect(service).toBeTruthy();
  });
});
