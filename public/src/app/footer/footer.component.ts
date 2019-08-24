import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    @Output() navLink = new EventEmitter<string>();
    constructor() { }

    ngOnInit() {
      $(document).ready(function() {
          $(".nav a").hover(function() {
              $(".nav").css("border-top", "5px solid #1200e7");
          }, function() {
            $(".nav").css("border-top", "");
          })

          $(".signOff h6").hover(function() {
            $(".signOff").css("border-top", "5px solid #1200e7");
          }, function() {
            $(".signOff").css("border-top", "");
          })
      })
    }
    callParent(string) {
      this.navLink.next(string);
    }
}
