import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;


  constructor(private postService: PostsService) { }

  ngOnInit() {
  }


  onDelete(post: Post) {
    this.postService.removePost(post);
  }


  onMore() {
    this.post.loveIts = this.post.loveIts + 1;
  }

  onLess() {
    this.post.loveIts = this.post.loveIts - 1;
  }

}
