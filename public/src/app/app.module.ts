import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainBodyComponent } from './main-body/main-body.component';
import { AboutComponent } from './main-body/about/about.component';
import { WhatIDoComponent } from './main-body/what-ido/what-ido.component';
import { ProjectUnoComponent } from './main-body/project-uno/project-uno.component';
import { ProjectDosComponent } from './main-body/project-dos/project-dos.component';
import { ProjectTresComponent } from './main-body/project-tres/project-tres.component';
import { ContactMeComponent } from './main-body/contact-me/contact-me.component';
import { TechnologyComponent } from './main-body/technology/technology.component';
import { ThisWebsiteComponent } from './main-body/this-website/this-website.component';
import { IntroComponent } from './main-body/intro/intro.component';
import { CornerTitleComponent } from './main-body/corner-title/corner-title.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainBodyComponent,
    AboutComponent,
    WhatIDoComponent,
    ProjectUnoComponent,
    ProjectDosComponent,
    ProjectTresComponent,
    ContactMeComponent,
    TechnologyComponent,
    ThisWebsiteComponent,
    IntroComponent,
    CornerTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
