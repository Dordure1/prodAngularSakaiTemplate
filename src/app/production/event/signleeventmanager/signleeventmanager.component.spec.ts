import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignleeventmanagerComponent } from './signleeventmanager.component';

describe('SignleeventmanagerComponent', () => {
  let component: SignleeventmanagerComponent;
  let fixture: ComponentFixture<SignleeventmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignleeventmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignleeventmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
