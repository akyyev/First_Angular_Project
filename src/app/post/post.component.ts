import { AppErrorHandler } from './../comman/app-error-handler';
import { BadInput } from './../comman/bad-input';
import { NotFoundError } from './../comman/not-found-error';
import { AppError } from './../comman/app-error';
import { PostService } from './../services/post.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private service: PostService) { }

  
  posts: [Object: any];

  ngOnInit() {
      this.service.getAll()
      .subscribe( res => {
        this.posts = res as [any]
      });
  }

  createPost(input: HTMLInputElement) {
    let postData = { title: input.value };
    input.value = '';
    // Here we are adding the course immidiately when user hits an enter
    this.posts.splice(0, 0, postData);

    this.service.create(postData)
    .subscribe( 
      res => {
        postData['id'] = res['id'];
      }, 
      (error: AppError) => {
        // If call was unseccessful then we have to revert changes back
        // This is optimistic approach, that provides better user experience
        // This is to revert the creation of course
        this.posts.splice(0, 1);

        if(error instanceof BadInput) {
          // this.form.setErrors(error.originalError)
          //alert('Bad input has been passed');
        } else throw error; // we need to throw error to hit global error-handler
      });
    
  }

  updatePost(post) {
    // this.http.put( this.baseUrl, post)
    this.service.update(post)
    .subscribe( 
      res => {
        console.log(res);
      }
    );
  }

  deletePost(post) {
    // It will directly delete post without waiting the response of api call, if it fails the we will revert it back
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    // this.http.put( this.baseUrl, post)
    const fakeId = '345/q35';
    this.service.delete(fakeId)
    // this.service.deletePost(post.id)
    .subscribe( 
      () => {
          null
      }, 
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if( error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else throw error;
      }
    );
  }


}
