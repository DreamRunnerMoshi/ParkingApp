import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceDisplayComponent } from './space-display.component';

describe('SpaceDisplayComponent', () => {
  let component: SpaceDisplayComponent;
  let fixture: ComponentFixture<SpaceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
