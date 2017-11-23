import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeerComponent } from './deer.component';

describe('DeerComponent', () => {
  let component: DeerComponent;
  let fixture: ComponentFixture<DeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
