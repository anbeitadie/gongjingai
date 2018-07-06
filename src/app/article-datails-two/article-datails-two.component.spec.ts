import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDatailsTwoComponent } from './article-datails-two.component';

describe('ArticleDatailsTwoComponent', () => {
  let component: ArticleDatailsTwoComponent;
  let fixture: ComponentFixture<ArticleDatailsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDatailsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDatailsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
