import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeopardComponent } from './leopard.component';

describe('LeopardComponent', () => {
  let component: LeopardComponent;
  let fixture: ComponentFixture<LeopardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeopardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeopardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
