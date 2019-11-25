import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dos',
  templateUrl: './project-dos.component.html',
  styleUrls: ['./project-dos.component.css']
})
export class ProjectDosComponent implements OnInit {

  constructor() { }
  showTech: any;

  ngOnInit() {
    this.showTech = false;
  }

  swap(bool) {
    this.showTech = bool;
  }
}
