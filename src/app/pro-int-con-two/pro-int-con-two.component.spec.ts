import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProIntConTwoComponent } from './pro-int-con-two.component';

describe('ProIntConTwoComponent', () => {
  let component: ProIntConTwoComponent;
  let fixture: ComponentFixture<ProIntConTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProIntConTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProIntConTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
