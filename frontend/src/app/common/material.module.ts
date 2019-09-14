import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  imports: [
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class  MaterialModule {}
