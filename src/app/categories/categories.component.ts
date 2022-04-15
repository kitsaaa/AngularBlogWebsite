import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;

  constructor(private _postService: PostServiceService) { }

  ngOnInit(): void {
    this._postService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
