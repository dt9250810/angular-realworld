import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  data = mockData;
  constructor() { }

  ngOnInit(): void {
  }

  like(article: { likes: number; }) {
    article.likes += 1; 
  }

}

const mockData: Article[] = [
  {
    avator: 'http://i.imgur.com/Qr71crq.jpg',
    author: 'bruce',
    publishDate: new Date("2021-01-20"),
    likes: 20,
    title: 'this is a title',
    content: 'asdsa niusand nasduin iausndnasn jknwejkfnekjnf jknwejnf nkjwnfkjnsdlnfiuwefn qiunwnckjsnal najssajkdn jaskn'
  },
  {
    avator: 'http://i.imgur.com/Qr71crq.jpg',
    author: 'bruce',
    publishDate: new Date("2021-02-20"),
    likes: 99,
    title: 'this is a title',
    content: 'AA asdsa niusand nasduin iausndnasn jknwejkfnekjnf jknwejnf nkjwnfkjnsdlnfiuwefn qiunwnckjsnal najssajkdn jaskn'
  },
  {
    avator: 'http://i.imgur.com/Qr71crq.jpg',
    author: 'bruce',
    publishDate: new Date("2021-01-10"),
    likes: 22,
    title: 'this is a title',
    content: 'ZXZXZasdsa niusand nasduin iausndnasn jknwejkfnekjnf jknwejnf nkjwnfkjnsdlnfiuwefn qiunwnckjsnal najssajkdn jaskn'
  }
]

// define
export interface Article {
  avator: string;
  author: string;
  publishDate: Date;
  likes: number;
  title: string;
  content: string;
}