import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../home/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article!: Article;
  @Output() like = new EventEmitter<Article>();
  
  constructor() { }

  ngOnInit(): void {
  }
  likeAction(article: Article) {
    this.like.emit(article);
  }
}
