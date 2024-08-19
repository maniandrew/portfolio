import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent  {

  users:Array<any> = [];

  languagesKnown:string[] = [];

  languageDescription!:IOLanguagesDescription[];

  constructor() { 

    this.languagesKnown.push('React' , 'Angular' , 'React Native');

    const details = [
      {
        name:'React',
        description:'⦁ Our mission is to don’t need to wait in a long queue to book a game or to collect the fun card in the pandemic time ⦁ We have created the desktop application that users can book any kind of game while has been displayed on the list page and in the Kiosk, they can able to add quantity based on their requirements and user can add the product to the cart and user can pay the bill in the  kiosk  , as per the client requirement',
        path:'assets/images/2.png'
      },
      {
        name:'React',
        description:'⦁ Our mission is to don’t need to wait in a long queue to book a game or to collect the fun card in the pandemic time ⦁ We have created the desktop application that users can book any kind of game while has been displayed on the list page and in the Kiosk, they can able to add quantity based on their requirements and user can add the product to the cart and user can pay the bill in the  kiosk  , as per the client requirement',
        path:'assets/images/3.png'
      },
      {
        name:'Angular',
        description:'⦁ Our mission is to don’t need to wait in a long queue to book a game or to collect the fun card in the pandemic time ⦁ We have created the desktop application that users can book any kind of game while has been displayed on the list page and in the Kiosk, they can able to add quantity based on their requirements and user can add the product to the cart and user can pay the bill in the  kiosk  , as per the client requirement',
        path:'assets/images/admin.png'
      },
      {
        name:'React Native',
        description:'⦁ Our mission is to don’t need to wait in a long queue to book a game or to collect the fun card in the pandemic time ⦁ We have created the desktop application that users can book any kind of game while has been displayed on the list page and in the Kiosk, they can able to add quantity based on their requirements and user can add the product to the cart and user can pay the bill in the  kiosk  , as per the client requirement',
        path:'assets/images/market.png'
      }
    ] as IOLanguagesDescription[];


    this.languageDescription = details;
  }

  async ngOnInit() {

  }




  ngAfterViewInit() {
    console.log('hit comes')
  }


}







export interface IOLanguagesDescription {
  name:string,
  path:string,
  description:string
}
