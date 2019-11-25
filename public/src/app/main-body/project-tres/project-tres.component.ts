import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-tres',
  templateUrl: './project-tres.component.html',
  styleUrls: ['./project-tres.component.css']
})
export class ProjectTresComponent implements OnInit {

  constructor() { }
  showTech: any;

  ngOnInit() {
    this.showTech = false;
  }

  swap(bool) {
    this.showTech = bool;
  }
}
