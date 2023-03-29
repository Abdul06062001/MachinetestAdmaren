import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstoryComponent } from './liststory.component';

describe('ListstoryComponent', () => {
  let component: ListstoryComponent;
  let fixture: ComponentFixture<ListstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
