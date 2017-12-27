import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay, tap, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageService } from '../../core/message.service';

export class Hero {
  constructor(public id: number, public name: string) { }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/** Simulate a data service that retrieves heroes from a server */
@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(
    private http: HttpClient,
    private msg: MessageService
  ) { }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
      tap(heroes => this.msg.log(`fetched heroes`)),
      catchError(this.msg.handleError('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.msg.log(`fetched hero id=${id}`)),
      catchError(this.msg.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.msg.log(`found heroes matching "${term}"`)),
      catchError(this.msg.handleError<Hero[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.msg.log(`added hero w/ id=${hero.id}`)),
      catchError(this.msg.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.msg.log(`deleted hero id=${id}`)),
      catchError(this.msg.handleError<Hero>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.msg.log(`updated hero id=${hero.id}`)),
      catchError(this.msg.handleError<any>('updateHero'))
    );
  }
}
