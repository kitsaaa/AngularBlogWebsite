import { Component, OnInit, Input } from '@angular/core';
import { IBlogPost } from '../BlogPost';

@Component({
  selector: 'app-footer-latest-post',
  templateUrl: './footer-latest-post.component.html',
  styleUrls: ['./footer-latest-post.component.css']
})
export class FooterLatestPostComponent implements OnInit {

  @Input() posts: IBlogPost[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
