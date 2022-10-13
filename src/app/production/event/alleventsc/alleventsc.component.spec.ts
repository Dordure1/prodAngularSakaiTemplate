import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleventscComponent } from './alleventsc.component';

describe('AlleventscComponent', () => {
  let component: AlleventscComponent;
  let fixture: ComponentFixture<AlleventscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleventscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlleventscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
