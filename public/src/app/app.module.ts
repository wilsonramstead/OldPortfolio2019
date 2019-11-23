import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeadComponent } from './main-head/main-head.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { PortHeadComponent } from './port-head/port-head.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ContactComponent } from './contact/contact.component';
import { TechComponent } from './tech/tech.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProjectThreeComponent } from './project-three/project-three.component';
import { ProjectFourComponent } from './project-four/project-four.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AboutComponent } from './main-body/about/about.component';
import { WhatIDoComponent } from './main-body/what-ido/what-ido.component';
import { ProjectUnoComponent } from './main-body/project-uno/project-uno.component';
import { ProjectDosComponent } from './main-body/project-dos/project-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeadComponent,
    AboutMeComponent,
    FooterComponent,
    MainInfoComponent,
    PortHeadComponent,
    ProjectOneComponent,
    ContactComponent,
    TechComponent,
    NavbarComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
    ProjectFourComponent,
    MainBodyComponent,
    AboutComponent,
    WhatIDoComponent,
    ProjectUnoComponent,
    ProjectDosComponent,
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
