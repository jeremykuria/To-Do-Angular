import { Injectable, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }
  private heroesUrl = 'api/heroes';  // URL to web api

  getHeroes(): Observable<Hero[]> {
    //TODO: send the message _after_ fetching the heroes
    console.log('inside hero service');
    console.log(this.http.get<Hero[]>(this.heroesUrl));
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_=> this.log('fetched hero id= $id')),

    );

  }
    /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    //TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES.find(hero => hero.id === id));
   return this.http.get<Hero>(url).pipe(
      tap(_=> this.log('fetched hero id= $id')),
      
   )
  }

  private log(message: string){
    this.messageService.add("hero service" + message);
  }



}
