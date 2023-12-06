import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private wordSearchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('HTML');
  public wordSearch$: Observable<string> = this.wordSearchSubject.asObservable();

  getWord(): string {
    return this.wordSearchSubject.getValue();
  }

  setWord(word: string): void {
    this.wordSearchSubject.next(word);
  }
}
