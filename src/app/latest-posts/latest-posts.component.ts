import { Component, OnInit, Input } from '@angular/core';
import { IBlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  posts: any;

  constructor(private _postService: PostServiceService) { }

  ngOnInit(): void {
    this._postService.getPosts(1, null, null).subscribe(data => {
      this.posts = data.slice(0, 3);
    })
  }

}
