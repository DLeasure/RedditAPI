import { Component } from '@angular/core';
import { RequestService } from './request.service'

// interface Post {
//   title: string,
//   thumbnail: string,
//   edited: boolean,
//   url: string
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit';

  posts : [];

  constructor(private requestService : RequestService) {
    this.requestService.getPosts().subscribe(item => {
      this.posts = item.data.children;
      this.posts = this.posts.slice(1,11);
      console.log(this.posts);
    });
  };

}
