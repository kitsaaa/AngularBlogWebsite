import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

var mongoObjectId = function () {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
};

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


  blogPost: IBlogPost = new IBlogPost();
  
  
  tags: string = "";

  constructor(private _postService: PostServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this.blogPost.isPrivate = false;
    this.blogPost.postDate = new Date().toDateString();
    this.blogPost.postedBy = "BTI425 Student";
    this.blogPost.views = 0;
    this.blogPost._id = mongoObjectId();
    console.log(this.blogPost)
    this._postService.newPost(this.blogPost).subscribe(data => {
      this.router.navigate(['admin']);
    });
  }

}
