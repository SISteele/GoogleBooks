import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book';

import { BookService } from 'src/app/providers/book.service';


@Component({
  selector: 'gb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  }
}
