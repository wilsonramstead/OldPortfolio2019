import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisWebsiteComponent } from './this-website.component';

describe('ThisWebsiteComponent', () => {
  let component: ThisWebsiteComponent;
  let fixture: ComponentFixture<ThisWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
