import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ScreensComponent } from "./screens.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ResumeComponent } from "./resume/resume.component";
import { ServicesComponent } from "./services/services.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";


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
            },
            {
                path:'resume',
                component:ResumeComponent
            },
            {
                path:'services',
                component:ServicesComponent
            },
            {
                path:'skills',
                component:SkillsComponent
            },
            {
                path:'projects',
                component:ProjectsComponent
            }
        ],
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})


export class ScreensRoutingModule {}