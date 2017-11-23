import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FetchDogsService {
	// List of Dog Api's : https://dog.ceo/dog-api/
	private fetchDogsUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getNewDog(): Observable<any>{
  	return this.http.get<any>(this.fetchDogsUrl).pipe(
  		tap(response => response),
			catchError(error => error)
  	)
  }

}
