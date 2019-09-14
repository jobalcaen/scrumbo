import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MaterialModule} from './common/material.module';
import { FormsModule } from '@angular/forms';

import { BoardFormComponent } from './components/board-form/board-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BoardComponent } from './components/board/board.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NoteComponent } from './components/note/note.component';
import { ViewModeDirective } from './directives/view-mode.directive';
import { EditModeDirective } from './directives/edit-mode.directive';


@NgModule({
  declarations: [
    AppComponent,
    BoardFormComponent,
    PageNotFoundComponent,
    HomePageComponent,
    BoardComponent,
    NewNoteComponent,
    NoteComponent,
    ViewModeDirective,
    EditModeDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
