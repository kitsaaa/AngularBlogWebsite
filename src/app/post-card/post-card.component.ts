import { Component, OnInit, Input } from '@angular/core';
import { IBlogPost } from '../BlogPost'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

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

  // elements = document.getElementsByClassName("text-muted");
  // i: number = 0

  ngOnInit(): void {
    
    // console.log(this.post.post)
    // this.elements[this.i].innerHTML = this.post.post
    // this.i++;

  }

}
