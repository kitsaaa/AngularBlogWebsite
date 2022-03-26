import { Component, OnInit, Input } from '@angular/core';
import blogData from '../blogData.json'
import { IBlogPost } from '../BlogPost';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() blogPosts: IBlogPost[] = blogData;

  constructor() { }

  ngOnInit(): void {
  }

}
