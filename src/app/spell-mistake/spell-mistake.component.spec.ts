import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellMistakeComponent } from './spell-mistake.component';

describe('SpellMistakeComponent', () => {
  let component: SpellMistakeComponent;
  let fixture: ComponentFixture<SpellMistakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellMistakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellMistakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
