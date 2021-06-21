import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private http: HttpClient, private PostService:PostService) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  addPost(input: HTMLInputElement): void {
    const post = { title: input.value };
    input.value = '';
    this.PostService.createEntity(post).subscribe((response) => {
      this.loadPosts();
    });
  }

  loadPosts() {
    this.PostService.loadEntity().subscribe((response) => {
      this.posts = response;
      this.posts.reverse();
    });
  }

  updatePost(post: any) {
    post.isRead=!post.isRead;
    this.PostService.updateEntity(post)
      .subscribe((response) => {
        console.log('updated!');
        this.loadPosts();
      });
  }
  
  deletePost(post: any) {
    this.PostService.deleteEntity(post)
      .subscribe((response) => {
        console.log('deleted!');
        this.loadPosts();
      });
  }
}
