import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBeastsComponent } from './panel-beasts.component';

describe('PanelBeastsComponent', () => {
  let component: PanelBeastsComponent;
  let fixture: ComponentFixture<PanelBeastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBeastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBeastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
