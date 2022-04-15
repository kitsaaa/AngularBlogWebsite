import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {

  posts: any;

  constructor(private _postService: PostServiceService) { }

  ngOnInit(): void {
    this._postService.getPosts(1, null, null).subscribe(data => {
      this.posts = data.slice(0, 3);
    })
  }

}
