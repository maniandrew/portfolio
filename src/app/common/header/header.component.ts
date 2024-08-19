import { Component } from '@angular/core';
import { Router , RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedTab:string = '';

  constructor(private _route:Router) { }


  ngOnInit() {
    if(!this.selectedTab) this.selectedTab =  'home'
  }


  routeHandler = (menu:string) => {
    console.log('/screens/' + menu)
    this.selectedTab = menu
    this._route.navigateByUrl('/screens/' + menu)
  }



}
