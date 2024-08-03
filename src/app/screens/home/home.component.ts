import { CommonInternalModule } from '../../common/common-module';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports:[
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CommonInternalModule
  ]
})
export class HomeComponent {


  constructor(private _route:Router) { }


  routeHandler = (menu:string) => {
      this._route.navigateByUrl('/' + menu)
  }

}
