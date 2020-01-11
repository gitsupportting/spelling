import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellMistakesComponent } from './spell-mistakes.component';

describe('SpellMistakesComponent', () => {
  let component: SpellMistakesComponent;
  let fixture: ComponentFixture<SpellMistakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellMistakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellMistakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
