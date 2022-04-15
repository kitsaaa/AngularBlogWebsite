import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: any;

  page: number = 1;
  tag: any;
  category: any;
  querySub: any

  constructor(private _postService: PostServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.category = null;
      } else {
        this.tag = null;
      }
      if (params['category']) {
        this.category = params['category'];
        this.tag = null;
      } else {
        this.category = null;
      }
      this.getPage(+params['page'] || 1);
    });
  }
  getPage(num: number) {
    this._postService.getPosts(num, this.tag, this.category).subscribe(data => {
      this.blogPosts = data;
    });
    console.log(this.blogPosts)
  }
  ngOnDestroy() {
    if (this.querySub)
      this.querySub.unsubscribe();
  }

}
