import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentContentComponent } from './assignment-content.component';

describe('AssignmentContentComponent', () => {
  let component: AssignmentContentComponent;
  let fixture: ComponentFixture<AssignmentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
