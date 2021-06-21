import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class FollowersService extends DataService {
  url: string = 'https://api.github.com/users/octocat/followers'
  
  constructor(http: HttpClient) {
    super(http);
  }
}
