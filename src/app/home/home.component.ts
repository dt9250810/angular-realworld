import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Articles } from './models/article.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// const mockData: Article[] = [
//   {
//     avator: 'http://i.imgur.com/Qr71crq.jpg',
//     author: 'bruce',
//     publishDate: new Date("2021-01-20"),
//     likes: 20,
//     title: 'this is a title',
//     content: 'asdsa niusand nasduin iausndnasn jknwejkfnekjnf jknwejnf nkjwnfkjnsdlnfiuwefn qiunwnckjsnal najssajkdn jaskn'
//   },
//   {
//     avator: 'http://i.imgur.com/Qr71crq.jpg',
//     author: 'bruce',
//     publishDate: new Date("2021-02-20"),
//     likes: 99,
//     title: 'this is a title',
//     content: 'AA asdsa niusand nasduin iausndnasn jknwejkfnekjnf jknwejnf nkjwnfkjnsdlnfiuwefn qiunwnckjsnal najssajkdn jaskn'
//   },
//   {
//     avator: 'http://i.imgur.com/Qr71crq.jpg',
//     author: 'bruce',
//     publishDate: new Date("2021-01-10"),
//     likes: 22,
//     title: 'this is a title',
//     content: 'ZXZXZasdsa niusand nasduin iausndnasn jknwejkfnekjnf jknwejnf nkjwnfkjnsdlnfiuwefn qiunwnckjsnal najssajkdn jaskn'
//   }
// ]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // data = mockData;
  data = []
  data$ = this.service.loadData().pipe(map(result => result.articles));


  constructor(private service: ApiService) {
    // this.loadData();
  }

  // loadData() {
  //   this.service.loadData().subscribe({
  //     next: (result: any) => {
  //       console.log(result);
  //       this.data = result.articles;
  //       console.log(this.data);
  //     }
  //   });
  // }

  // loadData() {
  //   this.service
  //     .loadData()
  //     .pipe(map(result => result.articles))
  //     .subscribe({
  //       next: (articles: any) => {
  //         this.data = articles;
  //       }
  //   });
  // }

  ngOnInit(): void {
  }

  like(article: { favoritesCount: number; }) {
    article.favoritesCount += 1; 
  }

}

// define
// export interface Article {
//   avator: string;
//   author: string;
//   publishDate: Date;
//   likes: number;
//   title: string;
//   content: string;
// }