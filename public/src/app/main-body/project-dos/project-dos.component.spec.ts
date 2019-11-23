import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDosComponent } from './project-dos.component';

describe('ProjectDosComponent', () => {
  let component: ProjectDosComponent;
  let fixture: ComponentFixture<ProjectDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
