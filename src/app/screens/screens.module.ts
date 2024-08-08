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
import { SkillsComponent } from './skills/skills.component'

@NgModule({
    declarations: [ScreensComponent, AboutComponent,ResumeComponent , ServicesComponent, SkillsComponent],
    imports: [
        ScreensRoutingModule,

        CommonInternalModule,

        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        // this is for ng directives
        CommonModule,


    ]
})

export class ScreensModule { }