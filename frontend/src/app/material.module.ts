import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  imports: [
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class  MaterialModule {}
