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
      'Authorization': 'Basic ekhUZWc4ajVNYWpkRzNIQ3RlZ0ExYUZDREd2dUpVcjFZQ3ZDVERNbTpGOVFpQ1BocFhBNnc1TGxDM2lsc3VaeUlqRFlTR0I0NHU5RWNtNEU0YVIyY2dUelJNQkphVzBBNGk2amRGdVE3TDdONEY5S1BMVExBZlJ4S25JOEVqTDhqQzBXOEVEYlNPMGx6TnF4Q0YydVc3cTBNUDZ2dkF3NjkxOTB6QzUxdg=='
    });

    const wordSearch = this.searchService.getWord();

    const data: any = await this.httpClient
      .get(`https://www.udemy.com/api-2.0/courses/?search=${wordSearch}`, { headers })
      .toPromise();

    this.cursos = data.results || [];
    console.log(this.cursos);
    this.mostrarOcultarSpinner(false);

  }

  mostrarOcultarSpinner(mostrar: boolean) {
    this.mostrarSpinner = mostrar;
  }
}
