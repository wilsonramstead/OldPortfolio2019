import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortHeadComponent } from './port-head.component';

describe('PortHeadComponent', () => {
  let component: PortHeadComponent;
  let fixture: ComponentFixture<PortHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
