import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {

  educationDetails:Array<IOEducation> = [];

  workDetails:Array<IOWorkDetails> = [];

  constructor() { }

  ngOnInit() {

      const education = [
        {
          year:'2016-2017',
          course:"H.S.L.C",
          base: 'state board',
          content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore, hic atque sit aspernatur repellat! Sit placeat, officia mollitia earum facere nihil. Et minus, aliquid dicta laborum, optio temporibus facilis commodi maiores voluptatum nisi ullam dolor reiciendis, porro vero dolorum"
        },
          {
            year:'2017-2020',
            course:"Bachelor's Degree of B.C.A",
            base: 'madras university',
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore, hic atque sit aspernatur repellat! Sit placeat, officia mollitia earum facere nihil. Et minus, aliquid dicta laborum, optio temporibus facilis commodi maiores voluptatum nisi ullam dolor reiciendis, porro vero dolorum"
          },
          {
            year:'2021-2023',
            course:"Bachelor's Degree of M.C.A",
            base: 'madras university',
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore, hic atque sit aspernatur repellat! Sit placeat, officia mollitia earum facere nihil. Et minus, aliquid dicta laborum, optio temporibus facilis commodi maiores voluptatum nisi ullam dolor reiciendis, porro vero dolorum"
          }
      ] as IOEducation[];

      const workDetails = [
        {
          company:'Talexo solutions private ltd',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore, hic atque sit aspernatur repellat! Sit placeat, officia mollitia earum facere nihil. Et minus, aliquid dicta laborum, optio temporibus facilis commodi maiores voluptatum nisi ullam dolor reiciendis, porro vero dolorum',
          position:'software enigneer(trainee)',
          year:'2021-2021'
        },
        {
          company:'Proglint software solutions',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore, hic atque sit aspernatur repellat! Sit placeat, officia mollitia earum facere nihil. Et minus, aliquid dicta laborum, optio temporibus facilis commodi maiores voluptatum nisi ullam dolor reiciendis, porro vero dolorum',
          position:'software enigneer(junior)',
          year:'2022-2022'
        },
        {
          company:'Cortiqa health private ltd',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore, hic atque sit aspernatur repellat! Sit placeat, officia mollitia earum facere nihil. Et minus, aliquid dicta laborum, optio temporibus facilis commodi maiores voluptatum nisi ullam dolor reiciendis, porro vero dolorum',
          position:'software enigneer(senior)',
          year:'2022-2024'
        }
      ] as IOWorkDetails[]
      this.educationDetails.push(...education)
      this.workDetails.push(...workDetails)
  }
}



export interface IOEducation {
    year:string,
    course:string,
    base:string,
    content:string
}


export interface IOWorkDetails {
  year:string,
  position:string,
  company:string,
  description:string
}
