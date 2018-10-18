import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarydailogComponent } from './summarydailog.component';

describe('SummarydailogComponent', () => {
  let component: SummarydailogComponent;
  let fixture: ComponentFixture<SummarydailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarydailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarydailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
