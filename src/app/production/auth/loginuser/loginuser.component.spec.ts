// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Router, RouterModule } from '@angular/router';
// import { LayoutService } from 'src/app/layout/service/app.layout.service';
// import { AuthServiceUserService } from '../../shared/services/user/auth-service-user.service';
// import { AuthModule } from '../auth.module';

// import { LoginuserComponent } from './loginuser.component';

// describe('LoginComponent', () => {
//   let component: LoginuserComponent;
//   let fixture: ComponentFixture<LoginuserComponent>;
//   let loginUserServe : AuthServiceUserService
//   let client : HttpClient
//   let router : Router

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LoginuserComponent ],
//       imports : [HttpClientModule, RouterModule, AuthModule],
//       providers : [AuthServiceUserService, HttpClient, Router, LayoutService]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LoginuserComponent);
//     loginUserServe = TestBed.inject(AuthServiceUserService); 
//     client =  TestBed.inject(HttpClient)
//     router = TestBed.inject(Router)
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     let service = new AuthServiceUserService(HttpClient)
//     expect(component).toBeTruthy();
//   });


// //   it('test de la fonction check login' , () => {
// //     console.log(fixture);
    
// //   })


// });
