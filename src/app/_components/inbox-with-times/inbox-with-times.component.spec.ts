import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxWithTimesComponent } from './inbox-with-times.component';

describe('InboxWithTimesComponent', () => {
  let component: InboxWithTimesComponent;
  let fixture: ComponentFixture<InboxWithTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxWithTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxWithTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
