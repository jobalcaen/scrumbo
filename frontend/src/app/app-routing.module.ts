
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BoardResolverService } from './services/board-resolver.service';
import { BoardComponent } from './components/board/board.component';

const appRoutes: Routes = [
    {
        path:"",
        component: HomePageComponent,
    },
    {
        path:":boardUrl",
        component: BoardComponent,
        resolve: {
            board: BoardResolverService
        }
    },
    { 
        path: '**',
        component: HomePageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}
 