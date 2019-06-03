import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MaterialModule} from './common/material.module';
import { FormsModule } from '@angular/forms';

import { BoardFormComponent } from './components/board-form/board-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BoardComponent } from './components/board/board.component';
import { BoardCanvasComponent } from './components/board-canvas/board-canvas.component';
import { BoardPaletteComponent } from './components/board-palette/board-palette.component';
import { NewNoteComponent } from './components/board-palette/new-note/new-note.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    BoardFormComponent,
    PageNotFoundComponent,
    HomePageComponent,
    BoardComponent,
    BoardCanvasComponent,
    BoardPaletteComponent,
    NewNoteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
