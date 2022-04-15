import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page: number = 0;
  @Output() newPage = new EventEmitter;

  constructor() { }

  ngOnInit(): void {

  }

  btnRightClicked() {
    this.newPage.emit(this.page += 1);
    
  }

  btnLeftClicked() {
    if (this.page > 1) {
      this.newPage.emit(this.page -= 1);
    }
  }

}
