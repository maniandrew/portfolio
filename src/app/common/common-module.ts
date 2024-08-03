import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "../screens/home/home.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[HeaderComponent ],
    imports:[
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
    ],
    exports:[HeaderComponent ]
})


export class CommonInternalModule { }