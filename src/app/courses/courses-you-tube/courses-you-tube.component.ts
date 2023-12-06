import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchServiceService } from '../../services/search-service.service';
import { Subscription } from 'rxjs';
const apiKey = 'AIzaSyBI3Ucv-fz9__crgH7bkcSFMKTKcZ-W4sA';
const apiKey2 = 'AIzaSyA0IrzQtA0tWlRO3bhaDKwijEs6iRyhr24';
@Component({
  selector: 'app-courses-you-tube',
  templateUrl: './courses-you-tube.component.html',
  styleUrls: ['./courses-you-tube.component.css']
})
export class CoursesYouTubeComponent implements OnInit {
  videos: any[] = [];
  mostrarSpinner = false;
  private subscription: Subscription = new Subscription;

  constructor(private httpClient: HttpClient, private searchService: SearchServiceService) { }

  async ngOnInit(): Promise<void> {
    this.subscription = this.searchService.wordSearch$.subscribe((wordSearch: string) => {
      this.obtenerVideos();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async obtenerVideos(): Promise<void> {
    this.mostrarOcultarSpinner(true);
    this.videos = [];

    const word = this.searchService.getWord() + " curso";
    console.log(word);
    const data: any = await this.httpClient
      .get(`https://www.googleapis.com/youtube/v3/search?q=${word}&key=${apiKey2}`)
      .toPromise();
    const videoItems = data.items || [];
    console.log(videoItems);

    for (const item of videoItems) {
      const videoId = item.id.videoId;
      if (videoId !== undefined) {
        const videoDetails: any = await this.httpClient
          .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey2}`)
          .toPromise();
        console.log("video ID:" + videoId);

        const videoDetail = videoDetails.items[0];
        this.videos.push({
          id: videoId,
          title: videoDetail.snippet.title,
          description: videoDetail.snippet.description,
          thumbnail: videoDetail.snippet.thumbnails.high.url
        });
        console.log('Video Details Response:', videoDetails);
      }
    }

    console.log(this.videos);
    this.mostrarOcultarSpinner(false);
  }

  mostrarOcultarSpinner(mostrar: boolean) {
    this.mostrarSpinner = mostrar;
  }
}