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
