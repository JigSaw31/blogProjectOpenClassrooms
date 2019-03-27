import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  postsSubject = new Subject<Post[]>();

  private posts: Post[] = [
    new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dictum felis. Vestibulum vitae aliquam tellus, vitae efficitur orci. Suspendisse interdum nisl pharetra placerat bibendum.'),
    new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dictum felis. Vestibulum vitae aliquam tellus, vitae efficitur orci. Suspendisse interdum nisl pharetra placerat bibendum.'),
    new Post('Mon troisième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dictum felis. Vestibulum vitae aliquam tellus, vitae efficitur orci. Suspendisse interdum nisl pharetra placerat bibendum.')
  ];

  constructor(private httpClient: HttpClient) {}

  savePostsToServer() {
    this.httpClient
      .put('https://blogproject-d8fd8.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getPostsFromServer() {
    this.httpClient
      .get<Post[]>('https://blogproject-d8fd8.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPostSubject();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePostsToServer();
    this.emitPostSubject();
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

}
