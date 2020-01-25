import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl = 'http://localhost:9090/getAllUsers';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    console.log('In getUsers method');
    return this.http.get(this.baseUrl);
  }
}
