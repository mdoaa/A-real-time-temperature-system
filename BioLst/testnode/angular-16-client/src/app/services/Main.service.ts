import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Sensor } from '../models/sensor.model';
import { User } from '../models/user.model';
import {throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}
@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get all objects
  GetAll() {
    return this.httpClient.get(`${this.REST_API}/getall`);
  }
  
  AddUser(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/register`;
    console.log(data)
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  checklogin(data: User): Observable<any> {
    let API_URL = `${this.REST_API}/login`;
    console.log(data)
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
  // getMongoDBDataWithTime(): Observable<{ data: any[]; retrievalTime: Date }> {
  //   let API_URL = `${this.REST_API}/getall`;
  //   return this.httpClient.get<{ data: any[] }>(API_URL).pipe(
  //     map(response => ({ data: response.data, retrievalTime: new Date() }))
  //   );
  // }
  // getMongoDBDataWithTime(): Observable<{ data: any[] }> {
  //   let API_URL = `${this.REST_API}/getall`;
  
  //   return this.httpClient.get<{ data: any[] }>(API_URL).pipe(
  //     map(response => {
  //       // Add a timestamp to each item
  //       const dataWithTimestamp = response.data.map(item => ({
  //         ...item,
  //         timestamp: new Date(item.timestamp)
  //       }));
  
  //       // Return the updated data
  //       return { data: dataWithTimestamp };
  //     })
  //   );
  // getMongoDBDataWithTime(): Observable<{ data: any[] }> {
  //   let API_URL = `${this.REST_API}/getall`;
  
  //   return this.httpClient.get<{ data: any[] }>(API_URL).pipe(
  //     map(response => {
  //       // Add a timestamp to each item individually
  //       const dataWithTimestamp = response.data.map(item => ({
  //         ...item,
  //         retrievalTime: new Date()  // Add a timestamp property to each item
  //       }));
  
  //       // Return the updated data
  //       return { data: dataWithTimestamp };
  //     })
  //   );
  // }
  
  }
  
