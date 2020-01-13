import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor() { }
  showTech:any;

  ngOnInit() {
    this.showTech = 'temp';
  }
  changeTech(string) {
    this.showTech = string;
    console.log('showTech: ', this.showTech);
  }

}
