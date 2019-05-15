import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { BoardService } from 'src/app/service/board.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueBoardNameValidator implements AsyncValidator {
    constructor(private boardService: BoardService){
    }

    validate(
        ctrl: AbstractControl
      ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.boardService.checkEmailNotTaken(ctrl.value).pipe(
          map(isTaken => (!!isTaken ? { boardNameTaken: true } : null)),
          catchError(() => null)
        );
      }
}
