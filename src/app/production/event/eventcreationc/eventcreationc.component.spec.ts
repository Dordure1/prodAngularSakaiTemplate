import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcreationcComponent } from './eventcreationc.component';

describe('EventcreationcComponent', () => {
  let component: EventcreationcComponent;
  let fixture: ComponentFixture<EventcreationcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcreationcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventcreationcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
