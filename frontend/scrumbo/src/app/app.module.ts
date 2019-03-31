import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewBoardComponent } from './new-board/new-board.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    ShowDataComponent,
    PagenotfoundComponent,
    NewBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
