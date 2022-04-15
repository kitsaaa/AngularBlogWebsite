import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  blogPosts: IBlogPost[] = [];

  constructor(private _postService: PostServiceService, private router: Router) { }

  ngOnInit(): void {
    this._postService.getAllPosts().subscribe(data => {
      this.blogPosts = data;
    })
  }

  rowClicked(e: any, id: any) {
    this.router.navigate(["admin/post", id]);
  }

}
