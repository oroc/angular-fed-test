import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Property } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private serviceUrl = 'http://localhost:4201/api/properties';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.serviceUrl).pipe(
      tap((data) => {
        // console.log(data);
      }),
      catchError(this.errorHandler)
    );
  }

  errorHandler(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${err.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }

    console.log(errorMessage);

    return throwError(() => {
      return errorMessage;
    });
  }
}
