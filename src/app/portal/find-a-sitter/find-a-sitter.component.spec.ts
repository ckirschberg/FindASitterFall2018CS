import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindASitterComponent } from './find-a-sitter.component';

describe('FindASitterComponent', () => {
  let component: FindASitterComponent;
  let fixture: ComponentFixture<FindASitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindASitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindASitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
