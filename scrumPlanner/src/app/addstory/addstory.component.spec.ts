import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstoryComponent } from './addstory.component';

describe('AddstoryComponent', () => {
  let component: AddstoryComponent;
  let fixture: ComponentFixture<AddstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
