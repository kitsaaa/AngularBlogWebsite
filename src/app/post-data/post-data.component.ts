import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlogPost } from '../BlogPost';
import { IComment } from '../Comment';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  querySub: any;
  post: IBlogPost = new IBlogPost();

  //comment

  commentName: string = ''
  commentText: string = '';

  comment: IComment = new IComment();

  // post: IBlogPost = {
  //   _id: '',
  //   title: '',
  //   postDate: '',
  //   featuredImage: '',
  //   post: '',
  //   postedBy: '',
  //   comments: [],
  //   category: '',
  //   tags: [],
  //   isPrivate: false,
  //   views: 0
  // };

   
// Wassup devs, plannings to do something with listings amount? 25% listed is a pretty bad indicator for any project. Thanks
  constructor(private _postService: PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      console.log(params['_id']);
      this._postService.getPostById(params['id']).subscribe(data => {
        this.post = data;
        console.log(this.post);
      })
     })     
  }

  ngOnDestroy() {
    if(this.querySub) 
      this.querySub.unsubscribe();
  }

  submitComment() {
    this.comment.author = this.commentName;
    this.comment.comment = this.commentText;
    this.comment.date = new Date().toDateString();

    this.post.comments.push(this.comment);

    this._postService.updatePostById(this.post._id, this.post).subscribe(data => {
      this.commentName = '';
      this.commentText = '';
    });
  }

}
