import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from './../services/posts.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.savePostsToServer();
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  onSave() {
    this.postService.savePostsToServer();
  }

  onFetch() {
    this.postService.getPostsFromServer();
  }

}
