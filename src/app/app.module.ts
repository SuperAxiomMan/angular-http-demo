import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import {HttpClientModule} from '@angular/common/http';
import { FollowersComponent } from './followers/followers.component'

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
