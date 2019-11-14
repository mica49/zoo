import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBirdsComponent } from './panel-birds.component';

describe('PanelBirdsComponent', () => {
  let component: PanelBirdsComponent;
  let fixture: ComponentFixture<PanelBirdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBirdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
