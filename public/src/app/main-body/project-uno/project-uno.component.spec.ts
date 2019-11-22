import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUnoComponent } from './project-uno.component';

describe('ProjectUnoComponent', () => {
  let component: ProjectUnoComponent;
  let fixture: ComponentFixture<ProjectUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
