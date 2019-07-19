import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient : HttpClient) {
  }

  getPosts() {
    return this.httpClient.get("https://www.reddit.com/r/aww/.json");
  }
}
