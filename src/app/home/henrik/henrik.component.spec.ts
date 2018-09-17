import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HenrikComponent } from './henrik.component';

describe('HenrikComponent', () => {
  let component: HenrikComponent;
  let fixture: ComponentFixture<HenrikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenrikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HenrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
