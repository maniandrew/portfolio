import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills:IOSkillsList[] = [];

  constructor() { }


  ngOnInit() {
      const skill = [
          {title:'javascript' , percent:10},
          {title:'node' , percent: 20},
          {title:'angular' , percent: 40},
          {title: 'react' , percent: 60},
          {title: 'redux' , percent: 60},
          {title:'nest' , percent: 60},
          {title:'sql' , percent: 80},
          {title: 'nosql' , percent: 80}
      ] as IOSkillsList[];

      this.skills.push(...skill)
  }
}



export interface IOSkillsList {
    title:string;
    percent:number
}
