import { TestBed } from '@angular/core/testing';

import { BoardResolverService } from './board-resolver.service';
import { ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';

describe('BoardResolverService', () => {
  let route: Partial<ActivatedRouteSnapshot>

  
  beforeEach(() => {
    const spy = jasmine.createSpyObj('ActivatedRouteSnapshot', ['getValue']);

    TestBed.configureTestingModule({
    })


        

  });


  it('should be created', () => {
    const service: BoardResolverService = TestBed.get(BoardResolverService);
    expect(service).toBeTruthy();
  });

  it('should return a board object if  the board exists' ,() => {

  })
});
