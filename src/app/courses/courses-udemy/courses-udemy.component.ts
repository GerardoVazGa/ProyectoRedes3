import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';
import { Subscription } from 'rxjs';

const wordSearch = 'HTML';

@Component({
  selector: 'app-courses-udemy',
  templateUrl: './courses-udemy.component.html',
  styleUrls: ['./courses-udemy.component.css']
})
export class CoursesUdemyComponent {
  cursos: any[] = [];
  mostrarSpinner = false;
  private subscription: Subscription = new Subscription;

  constructor(private httpClient: HttpClient, private searchService: SearchServiceService) { }

  async ngOnInit(): Promise<void> {
    this.subscription = this.searchService.wordSearch$.subscribe((wordSearch: string) => {
      this.obtenerCursos();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async obtenerCursos(): Promise<void> {
    this.mostrarOcultarSpinner(true);
    const headers = new HttpHeaders({
      'Authorization': 'Basic...'
    });

    const word = this.searchService.getWord();

    const data: any = await this.httpClient
      .get(`https://www.udemy.com/api-2.0/courses/?search=${word}`, { headers })
      .toPromise();

    this.cursos = data.results || [];
    console.log(this.cursos);
    this.mostrarOcultarSpinner(false);

  }

  mostrarOcultarSpinner(mostrar: boolean) {
    this.mostrarSpinner = mostrar;
  }
}
