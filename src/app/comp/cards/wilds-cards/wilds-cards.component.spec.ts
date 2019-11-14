import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildsCardsComponent } from './wilds-cards.component';

describe('WildsCardsComponent', () => {
  let component: WildsCardsComponent;
  let fixture: ComponentFixture<WildsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
