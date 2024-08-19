import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss'],
})
export class ScreensComponent {

  constructor(private _route:Router) { }


  ngOnInit() {
      this._route.navigateByUrl('/screens/projects')
  }

}
