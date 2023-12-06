import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Juan la usa
const apiKey = 'AIzaSyBI3Ucv-fz9__crgH7bkcSFMKTKcZ-W4sA';
//Solo para esto
const apiKey2 = 'AIzaSyA0IrzQtA0tWlRO3bhaDKwijEs6iRyhr24';
const searchQuery = 'HTML tutorial';

@Component({
  selector: 'app-courses-you-tube',
  templateUrl: './courses-you-tube.component.html',
  styleUrls: ['./courses-you-tube.component.css']
})
export class CoursesYouTubeComponent {
  videos: any[] = [];
  mostrarSpinner = false;

  constructor(private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.obtenerVideos();
  }

  async obtenerVideos(): Promise<void> {
    this.mostrarOcultarSpinner(true);

    try {
      const data: any = await this.httpClient
        .get(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=${apiKey}`)
        .toPromise();

      this.videos = data.items || [];
      console.log(this.videos);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.mostrarOcultarSpinner(false);
    }
  }

  mostrarOcultarSpinner(mostrar: boolean) {
    this.mostrarSpinner = mostrar;
  }
}
