import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material';
import {MaterialModule} from './material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NewBoardComponent,
    PagenotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
