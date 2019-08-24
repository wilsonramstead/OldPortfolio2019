import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(document).ready(function() {

        $(".contactWrapper").mousemove(function(event) {
          this.wrapperWidth = $(".contactWrapper").width();
          this.wrapperHeight = $(".contactWrapper").height();
          this.mouseXpercentage = Math.round(event.pageX / this.wrapperWidth * 100);
          console.log("posX: ", event.pageX);
          this.mouseYpercentage = Math.round(event.pageY / this.wrapperHeight * 100);
          console.log("posY: ", event.pageY);
          $(".contactWrapper").css('background', 'radial-gradient(at ' + this.mouseXpercentage + '% ' + this.mouseYpercentage + '%, #f5eacb, #3498db)');
        })
      })
  }


}
