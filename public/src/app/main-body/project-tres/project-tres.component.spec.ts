import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTresComponent } from './project-tres.component';

describe('ProjectTresComponent', () => {
  let component: ProjectTresComponent;
  let fixture: ComponentFixture<ProjectTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
