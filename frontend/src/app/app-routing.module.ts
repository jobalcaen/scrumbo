
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const appRoutes: Routes = [
    {
        path:"",
        component: HomePageComponent,
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
