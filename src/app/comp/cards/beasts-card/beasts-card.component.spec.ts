import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastsCardComponent } from './beasts-card.component';

describe('BeastsCardComponent', () => {
  let component: BeastsCardComponent;
  let fixture: ComponentFixture<BeastsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeastsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
