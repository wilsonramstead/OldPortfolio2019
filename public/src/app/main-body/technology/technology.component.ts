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

  infoAlert(string) {
    // alert(string);
    if(string === 'html') {
      alert("HTML stands for Hyper Text Markup Language. Html is the standard markup language for Web pages used to build the structure/content, represented by element tags. These tags include headings and paragraphs, images, links, lists, tables, forms...etc.");
    } else if(string === 'css') {
      alert("CSS stands for 'Cascading Style Sheet'. Cascading style sheets are used to format the layout of Web pages. They can be used to define element sizes, margins, colors, and other aspects of Web pages that previously could only be defined in a page's HTML.");
    } else if(string === 'javascript') {
      alert("Javscript is a scripting/programming language, primarily used on the web to render web pages in an interactive and dynamic fashion. Javascript can be used to update and change both HTML and CSS. Javascript can also be used to calculate, manipulate, and validate data.");
    } else if(string === 'bootstrap') {
      alert("Bootstrap is a popular CSS Framework for developing responsive and mobile-first websites. Bootstrap is a library containg styling classes and js functions, to be imported into a project and used within html elements.");
    } else if(string === 'jquery') {
      alert("jQuery is a Javascript library that greatly simplifies javascript programming, and is easy to learn. jQuery can be used within an HTML script tag, rather than importing a Javscript file.");
    } else if(string === 'ajax') {
      alert("Ajax stands for Asynchronous Javscript and XML. Ajax is a new technology to create better, faster, and more interactive webpages. This is possible by Ajax's ability to update a web page without reloading, and communicate with the server in the background; all after the page has loaded.");
    } else if(string === 'angular') {
      alert("Angular is a framework for creating single page, front-end applications with HTML and Typescript. The power of Angular is its ability to update a single page with many seperate components. Rather than routing and rendering seperate pages to display different content, the desired components get exchanged; without having to reload the page.");
    } else if(string === 'mean') {
      alert("MEAN - stands for MongoDB, Express, Angular, Node - is a set of technologies to enable creation of a full stack application. A full-stack app in the context of MEAN consists of a browser (Angular), a server (Node), a server framework (Express), and a database (MongoDB).");
    } else if(string === 'node') {
      alert("Node is a developement platform for executing Javascript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server, and is often used for real-time applications.");
    } else if(string === 'express') {
      alert("Express is a framework for Node.js, designed for building web applications and API's. Express is the back-end component of the MEAN stack.");
    } else if(string === 'mongodb') {
      alert("MongoDB is a document based database management tool that stores data in JSON-like formats. It is highly scalable, flexible, and distributed NoSQL database.");
    } else if(string === 'asp') {
      alert("ASP.NET Core is a cross-platform, high-performance framework for building modern web applications.");
    } else if(string === 'python') {
      alert("Python is a high level programming language designed to be easy to read and simple to implement, often used to create web applications. Python is also commonly used for data-analysis due to its large library, which eases many tasks.");
    } else if(string === 'django') {
      alert("Django is a framework written in Python that makes creating large web applications very easy.")
    } else if(string === 'mysql') {
      alert("MySQL is a relational database management system based on Structured Query Language (SQL). MySQL runs on virtually all platforms, including Linux, UNIX, and Windows.");
    } else if(string === 'sqlite') {
      alert("SQLite is a lightweight relational database management system, used to store user-defined records in large tables.");
    } else if(string === 'ubuntu') {
      alert("Ubuntu - an old african word meaning 'humanity to others' - is a complete Linux operating system. The online AWS server for this website is ran on ec2 instance of an Ubuntu 16.04 LTS server.");
    } else if(string === 'github') {
      alert("Github is a code hosting platform used for collaboration and version control. Github allows you (and others) to work together on projects.");
    }
  }

}
