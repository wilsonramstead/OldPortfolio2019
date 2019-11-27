import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerTitleComponent } from './corner-title.component';

describe('CornerTitleComponent', () => {
  let component: CornerTitleComponent;
  let fixture: ComponentFixture<CornerTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
