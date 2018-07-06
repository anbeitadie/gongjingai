import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProIntConOneComponent } from './pro-int-con-one.component';

describe('ProIntConOneComponent', () => {
  let component: ProIntConOneComponent;
  let fixture: ComponentFixture<ProIntConOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProIntConOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProIntConOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
