import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FstChildComponent } from './fst-child.component';

describe('FstChildComponent', () => {
  let component: FstChildComponent;
  let fixture: ComponentFixture<FstChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FstChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
