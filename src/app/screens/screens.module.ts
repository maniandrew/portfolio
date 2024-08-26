import { NgModule } from "@angular/core";
import { ScreensComponent } from "./screens.component";
import { ScreensRoutingModule } from "./screens-routing.module";
import { CommonInternalModule } from "../common/common-module"
import {  MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ResumeComponent } from './resume/resume.component';
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from './services/services.component';
import {MatGridListModule } from '@angular/material/grid-list';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from "@angular/forms";
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        ScreensComponent,
        AboutComponent,
        ResumeComponent , 
        SkillsComponent, 
        ProjectsComponent, 
        ContactComponent, 
        ServicesComponent
    ],
    imports: [
        ScreensRoutingModule,

        CommonInternalModule,

        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,

        // forms module ex(ngModel)
        FormsModule,
        // this is for ng directives
        CommonModule,

        // this is for tabs
        MatTabsModule


    ]
})

export class ScreensModule { }