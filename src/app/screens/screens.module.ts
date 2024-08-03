import { NgModule } from "@angular/core";
import { ScreensComponent } from "./screens.component";
import { ScreensRoutingModule } from "./screens-routing.module";
import { CommonInternalModule } from "../common/common-module"
import {  MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [ScreensComponent],
    imports: [
        ScreensRoutingModule,
        CommonInternalModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ]
})

export class ScreensModule { }