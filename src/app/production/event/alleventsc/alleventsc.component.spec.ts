import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlleventscComponent } from './alleventsc.component';
import {
    HttpClientTestingModule, HttpTestingController
  } from '@angular/common/http/testing';
import { EventService } from '../shared/event.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { eventTab } from '../../shared/class/event';
import { defer, first } from 'rxjs';

  


// describe('allEventCoponent', () => {
// //   let component: AlleventscComponent;
// //   let fixture: ComponentFixture<AlleventscComponent>;
//   let eventService : EventService
//   let httpClientSpy : jasmine.SpyObj<HttpClient>


//   beforeEach(() => {
//     // TestBed.configureTestingModule({
//     //   declarations: [ AlleventscComponent ],
//     //   imports : [HttpClientTestingModule ],
//     //   providers : [ EventService ]
//     // })
//     // .compileComponents();

//     //fixture = TestBed.createComponent(AlleventscComponent);
//     //component = fixture.componentInstance;

//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
//     eventService = new EventService(httpClientSpy)
    
    
//     //fixture.detectChanges();
//   });

//     it('should create', (done : DoneFn) => {

//         let eventList : any[] = [
//             {name : "loic", age : 42},
//             {name : "loic", age : 42}
//         ]

//         httpClientSpy.get.and.returnValue(defer(() => Promise.resolve(eventList)))

//         eventService.getAllEvent().subscribe({

//             next : res => {
//                 console.log(res)
//                 expect(res).toEqual(eventList)
//                 done()
//             }
//         });

//     })

// });






// ///////////

// describe('EventService', () => {
//     let component : AlleventscComponent
//     let fixture : ComponentFixture<AlleventscComponent>
//     let httpClient: HttpClient;
//     let httpTestingController: HttpTestingController;
//     let eventServe: EventService;


  
//     beforeEach(() => {
//       TestBed.configureTestingModule({
//         // Import the HttpClient mocking services
//         imports: [ HttpClientTestingModule ],
//         declarations : [AlleventscComponent],
//         // Provide the service-under-test
//         providers: [ EventService ]
//       }).compileComponents()
  
//       // Inject the http, test controller, and service-under-test
//       // as they will be referenced by each test.
//       httpClient = TestBed.inject(HttpClient);
//       httpTestingController = TestBed.inject(HttpTestingController);
//       eventServe = TestBed.inject(EventService);
//     });
  
//     afterEach(() => {
//       // After every test, assert that there are no more pending requests.
//       httpTestingController.verify();
//     });
    
    
  
//     /// HeroService method tests begin ///
//     describe('#getEvent', () => {
//       let expectedEvent: eventTab[];
  
//       beforeEach(() => {
//         eventServe = TestBed.inject(EventService);
//         // expectedHeroes = [
//         //   { id: 1, name: 'A' },
//         //   { id: 2, name: 'B' },
//         //  ] as Hero[];

//         expectedEvent = [
//             {
//                 organizationName: "Belgrains",
//                 eventName: "Bel'grains presentation",
//                 email: "belgrain@belgrain.be",
//                 city: "liège",
//                 address: "rue de la ferdrgdrtgedrgme",
//                 addressNumber: 2,
//                 maxParticipants: 50,
//                 date: new Date(2011,11,22,10),
//                 description: "présentation de l'entrprise Belgrain",
//                 type: "alimentary"
//               }
//         ]; 
//       });
//       it('should return expected event (called once)', () => {
//         eventServe.getAllEvent().pipe(first()).subscribe({
//             next: event => {
//                 console.log(event)
//             expect(event)          
//             .withContext('should return expected event')
//             .toEqual(expectedEvent)},
//           error: fail
//         });
  
//         // HeroService should have made one request to GET heroes from expected URL
//         const req = httpTestingController.expectOne(eventServe.urlEvent +"event");
//         expect(req.request.method).toEqual('GET');
  
//         // Respond with the mock heroes
//         req.flush(expectedEvent);
//       });
  
      
//     });
// })


  
  describe('event service', () => {
    let service: EventService;
    let httpController: HttpTestingController;
    let url = 'http://localhost:3001';
    let expectedEvent : any []
    expectedEvent = [
                    {   
                        id:1,
                        organizationName: "Belgrains",
                        eventName: "Bel'grains presentation",
                        email: "belgrain@belgrain.be",
                        city: "liège",
                        address: "rue de la ferdrgdrtgedrgme",
                        addressNumber: 2,
                        maxParticipants: 50,
                        date: new Date(2011,11,22,10),
                        description: "présentation de l'entrprise Belgrain",
                        type: "alimentaryss"
                      }
                ]; 
      
        beforeEach(() => {
          TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
          });
          service = TestBed.inject(EventService);
          httpController = TestBed.inject(HttpTestingController);
        });
  
  
      it('should call get first event and return an array of event', () => {
              
              // 1
            service.getAllEvent().pipe(first()).subscribe((res) => {
                  //2
            expect(res).toEqual(expectedEvent);
          });
      
              //3
          const req = httpController.expectOne({
            method: 'GET',
            url: `${url}/event`,
          });
  
              //4
          req.flush(expectedEvent);
        });
  })

