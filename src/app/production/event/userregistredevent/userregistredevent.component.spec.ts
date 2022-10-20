import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregistredeventComponent } from './userregistredevent.component';

describe('UserregistredeventComponent', () => {
  let component: UserregistredeventComponent;
  let fixture: ComponentFixture<UserregistredeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserregistredeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserregistredeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
