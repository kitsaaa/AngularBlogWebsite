import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: any;

  constructor(private _postService: PostServiceService) { }

  ngOnInit(): void {
    this._postService.getTags().subscribe(data => {
      this.tags = data;
    });
  }

}
