import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  udemyVisible: boolean = false;
  youtubeVisible: boolean = false;

  mostrarSection(opcion: string) {
    if (opcion === 'udemy') {
      this.udemyVisible = true;
      this.youtubeVisible = false;
    } else if (opcion === 'youtube') {
      this.udemyVisible = false;
      this.youtubeVisible = true;
    }
  }
}
