
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowDataComponent } from './show-data/show-data.component';
import { NewBoardComponent } from './new-board/new-board.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    {
        path:"",
        component: NewBoardComponent,
    },
    {
        path:"**",
        component: PagenotfoundComponent,
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
