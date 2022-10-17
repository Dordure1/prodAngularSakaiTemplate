import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouarecComponent } from './youarec.component';

describe('YouarecComponent', () => {
  let component: YouarecComponent;
  let fixture: ComponentFixture<YouarecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouarecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouarecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
