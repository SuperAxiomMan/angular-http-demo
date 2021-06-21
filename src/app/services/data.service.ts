import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://localhost:3000/posts';


  constructor(private http:HttpClient) { }

  createEntity(entity: any): Observable<Object> {
    return this.http.post(this.url, entity);
  }

  loadEntity(): Observable<Object> {
    return this.http.get(this.url);
  }

  updateEntity(entity: any): Observable<Object> {
    return this.http.patch(`${this.url}/${entity.id}`, entity);
  }

  deleteEntity(entity: any): Observable<Object> {
    return this.http.delete(`${this.url}/${entity.id}`);
  }
}
