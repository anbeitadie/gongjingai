import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsThreeComponent } from './article-details-three.component';

describe('ArticleDetailsThreeComponent', () => {
  let component: ArticleDetailsThreeComponent;
  let fixture: ComponentFixture<ArticleDetailsThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDetailsThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
