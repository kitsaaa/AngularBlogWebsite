import { Component, OnInit, Input } from '@angular/core';
import { IBlogPost } from '../BlogPost'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post: any;


  constructor() { }

  // elements = document.getElementsByClassName("text-muted");
  // i: number = 0

  ngOnInit(): void {
    
    //console.log(this.post)
    // this.elements[this.i].innerHTML = this.post.post
    // this.i++;

  }

}
