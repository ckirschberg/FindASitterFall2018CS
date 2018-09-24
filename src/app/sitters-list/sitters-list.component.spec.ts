import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SittersListComponent } from './sitters-list.component';

describe('SittersListComponent', () => {
  let component: SittersListComponent;
  let fixture: ComponentFixture<SittersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SittersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SittersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
