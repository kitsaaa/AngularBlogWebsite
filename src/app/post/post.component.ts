import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { IBlogPost } from '../BlogPost';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  blogPosts: IBlogPost[] = blogData;

  constructor() { }

  ngOnInit(): void {
  }

}
