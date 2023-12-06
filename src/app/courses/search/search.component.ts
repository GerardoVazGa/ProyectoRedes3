import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  word: string = '';
  wordExample: string = '';
  example: string[] = ['jardineria', 'java', 'costura', 'diseño', 'marketing', 'cocina', 'fotografía', 'programación', 'artes', 'musica', 'idiomas', 'historia', 'negocios', 'fitness', 'psicología', 'matemáticas', 'ciencia', 'literatura', 'filosofía', 'tecnología'];

  constructor(private searchService: SearchServiceService) {}

  ngOnInit() {
    this.wordExample = this.randomExample();
    this.searchService.setWord(this.wordExample);
  }

  search() {
    console.log('Search :', this.word);
    this.searchService.setWord(this.word);
  }

  randomExample(): string {
    const r = Math.floor(Math.random() * this.example.length);
    return this.example[r];
  }
}
