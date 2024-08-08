import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  projectCount: number = 0;

  stopProjectCount = setInterval(() => {
    this.projectCount++;
    if (this.projectCount >= 5) clearInterval(this.stopProjectCount);
  }, 100);



  constructor() {
    console.log('hit comes from the about route')
    // this.title = 'mani'
  }


  downloadResume = (): void => {
    const link = document.createElement('a');
    const fileName: string = 'mani-resume.pdf'
    const path = 'assets/resume/portfolio-mani-resume.pdf';
    link.href = path;
    link.download = fileName;
    link.click();
  }



}
