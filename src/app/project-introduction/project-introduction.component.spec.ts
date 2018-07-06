import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIntroductionComponent } from './project-introduction.component';

describe('ProjectIntroductionComponent', () => {
  let component: ProjectIntroductionComponent;
  let fixture: ComponentFixture<ProjectIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
