import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
    page: any;

    constructor() { }

    ngOnInit() {
      this.page = 'main';
    }

    showPage(page) {
        this.page = page;
        $('html, body').animate({
          scrollTop: 650,
        }, 1000);
    }
    
}
