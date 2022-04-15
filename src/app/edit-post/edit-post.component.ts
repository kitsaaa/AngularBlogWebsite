import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: IBlogPost = {
    _id: '',
    title: '',
    postDate: '',
    featuredImage: '',
    post: '',
    postedBy: '',
    comments: [],
    category: '',
    tags: [],
    isPrivate: false,
    views: 0
  };
  tags: string = "";

  constructor(private _postService: PostServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._postService.getPostById(this.route.snapshot.params['id']).subscribe(data => {
      this.blogPost = data;
      this.tags = this.blogPost.tags.toString();
    })
  }

  formSubmit() {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    this._postService.updatePostById(this.blogPost._id, this.blogPost).subscribe()
    this.router.navigate(['admin']);
  }

  deletePost() {
    this._postService.deletePostById(this.blogPost._id).subscribe(data => {
      this.router.navigate(['admin']);
    })
    
  }
  
}
