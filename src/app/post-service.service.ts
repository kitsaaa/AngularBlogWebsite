import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogPost } from './BlogPost';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  data: any;
  constructor(private http: HttpClient) { }

  getPosts(page: number, tag: any, category: any): Observable<IBlogPost[]> {
    if (tag == undefined && category == undefined) {
      this.data = this.http.get<IBlogPost[]>("https://still-basin-39472.herokuapp.com/api/posts?page=" + page + "&perPage=" + perPage);
    }
    else if (tag != undefined && category == undefined) {
      this.data = this.http.get<IBlogPost[]>("https://still-basin-39472.herokuapp.com/api/posts?page=" + page + "&perPage=" + perPage + "&tag=" + tag);
    }
    else if (tag == undefined && category != undefined) {
      this.data = this.http.get<IBlogPost[]>("https://still-basin-39472.herokuapp.com/api/posts?page=" + page + "&perPage=" + perPage + "&category=" + category);
    }
    else if (tag != undefined && category != undefined) {
      this.data = this.http.get<IBlogPost[]>("https://still-basin-39472.herokuapp.com/api/posts?page=" + page + "&perPage=" + perPage + "&category=" + category + "&tag=" + tag);
    }
    console.log(this.data);
    return this.data;
  }

  getPostById(id: number): Observable<IBlogPost> {
    return this.http.get<IBlogPost>("https://still-basin-39472.herokuapp.com/api/posts/" + id);
  }

  getCategories(): Observable<any> {
    return this.http.get<IBlogPost>("https://still-basin-39472.herokuapp.com/api/categories");
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>("https://still-basin-39472.herokuapp.com/api/tags");
  }

  getAllPosts():Observable<IBlogPost[]> {
    return this.data = this.http.get<IBlogPost[]>("https://still-basin-39472.herokuapp.com/api/posts?page=1&perPage=" + Number.MAX_SAFE_INTEGER);
  }

  newPost(data: IBlogPost): Observable<any> {
    return this.http.post<any>(`https://still-basin-39472.herokuapp.com/api/posts`, data);
  }

  updatePostById(id: string, data: IBlogPost): Observable<any> {
    return this.http.put<any>(`https://still-basin-39472.herokuapp.com/api/posts/${id}`, data);
  }

  deletePostById(id: string): Observable<any> {
    return this.http.delete<any>(`https://still-basin-39472.herokuapp.com/api/posts/${id}`);
  }
}
