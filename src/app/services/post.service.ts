import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostService extends DataService {
  url: string = 'http://localhost:3000/posts';

  constructor(http: HttpClient) {
    super(http);
  }


}
