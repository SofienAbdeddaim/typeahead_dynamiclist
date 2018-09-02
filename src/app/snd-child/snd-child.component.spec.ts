import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SndChildComponent } from './snd-child.component';

describe('SndChildComponent', () => {
  let component: SndChildComponent;
  let fixture: ComponentFixture<SndChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SndChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SndChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
