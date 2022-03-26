import { Component, Input, OnInit } from '@angular/core';
import { IBlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  @Input() post: IBlogPost = {
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

  constructor() { }

  ngOnInit(): void {
  }

}
