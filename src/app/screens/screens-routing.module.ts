import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ScreensComponent } from "./screens.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";


const routes:Routes = [
    {
        path:'',
        component:ScreensComponent,
        children:[
            {
                path:'home',
                component:HomeComponent,
            },
            {
                path:'about',
                component:AboutComponent
            }
        ]
    },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})


export class ScreensRoutingModule {}