import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelWildsComponent } from './panel-wilds.component';

describe('PanelWildsComponent', () => {
  let component: PanelWildsComponent;
  let fixture: ComponentFixture<PanelWildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelWildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelWildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
