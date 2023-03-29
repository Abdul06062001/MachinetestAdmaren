import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSprintComponent } from './auto-sprint.component';

describe('AutoSprintComponent', () => {
  let component: AutoSprintComponent;
  let fixture: ComponentFixture<AutoSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoSprintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
