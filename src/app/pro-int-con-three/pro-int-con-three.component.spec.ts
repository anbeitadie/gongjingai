import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProIntConThreeComponent } from './pro-int-con-three.component';

describe('ProIntConThreeComponent', () => {
  let component: ProIntConThreeComponent;
  let fixture: ComponentFixture<ProIntConThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProIntConThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProIntConThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
