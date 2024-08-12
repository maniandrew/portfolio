import { Component ,ElementRef, ViewChild } from '@angular/core';

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
          {title:'javascript' , percent:'95%'},
          {title:'node' , percent: '90%'},
          {title:'angular' , percent: '90%'},
          {title: 'react' , percent: '95%'},
          {title: 'redux' , percent: '95%'},
          {title:'nest' , percent: '90%'},
          {title:'sql' , percent: '85%'},
          {title: 'nosql' , percent: '80%'}
      ] as IOSkillsList[];

      this.skills.push(...skill);

  }


}



export interface IOSkillsList {
    title:string;
    percent:string
}
