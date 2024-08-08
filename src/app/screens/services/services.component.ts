import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {

  tiles: Tile[] = [];

  constructor() {

  }

  ngOnInit() {
    const tiles = [
      { text: 'Research', imagePath: 'assets/images/analysis.png' },
      { text: 'Programming', imagePath: 'assets/images/coding.png' },
      { text: 'Web Development', imagePath: 'assets/images/ui-design.png' },
      { text: 'Database', imagePath: 'assets/images/backend.png' },
      { text: "Api's Creation", imagePath: 'assets/images/api.png' },
      { text: 'Cloud Deploy', imagePath: 'assets/images/server.png' }
    ] as Tile[];

    this.tiles.push(...tiles)
  }

}



export interface Tile {
  text: string;
  imagePath: string;
}
