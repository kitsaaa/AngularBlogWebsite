import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { IBlogPost } from '../BlogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: IBlogPost[] = blogData;

  constructor() { }

  ngOnInit(): void {
    
  }

}
