import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  followers: any;


  constructor(private http: HttpClient, private FollowersService: FollowersService) {}

  ngOnInit(): void {
    this.loadFollowersList();
  }


  loadFollowersList(){
    this.FollowersService.loadEntity().subscribe((response) => {
      console.log(response)
      this.followers = response;
      this.followers.reverse();
    });
  }

  

}
