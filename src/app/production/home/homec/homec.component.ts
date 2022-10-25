import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { roundToNearestMinutesWithOptions } from 'date-fns/fp';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthServicesService } from '../../shared/services/coop/auth-services.service';
import { AuthServiceUserService } from '../../shared/services/user/auth-service-user.service';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.component.html',
  providers : [MessageService],
  styles: [`
        #hero{
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%);
            height:700px;
            overflow:hidden;
        }

        .pricing-card:hover{
            border:2px solid var(--cyan-200) !important;
        }

        @media screen and (min-width: 768px) {
            #hero{
                -webkit-clip-path: ellipse(150% 87% at 93% 13%);
                clip-path: ellipse(150% 87% at 93% 13%);
                height: 530px;
            }
        }

        @media screen and (min-width: 1300px){
            #hero > img {
                position: absolute;
                transform:scale(1.2);
                top:15%;
            }

        #hero > div > p {
                max-width: 450px;
            }
        }

        @media screen and (max-width: 1300px){
            #hero {
                height: 600px;
            }

        #hero > img {
            position:static;
            transform: scale(1);
            margin-left: auto;
        }

        #hero > div {
            width: 100%;
        }

        #hero > div > p {
                width: 100%;
                max-width: 100%;
            }
        }
    `]

})
export class HomecComponent implements OnInit {
isConnectCoop : boolean = false
isConnectUser : boolean = false

  constructor(
    public layoutService : LayoutService, 
    public router: Router, 
    private authServe : AuthServicesService, 
    private messageService : MessageService,
    private AuthUserServe : AuthServiceUserService
    
    ) { 
  }
  ngOnInit(): void {
    let displayed = localStorage.getItem("displayedToast")
    this.authServe.$isConnect.subscribe((isConnect : boolean)=>{
        this.isConnectCoop = isConnect
      
        if(this.isConnectCoop ==true){
            if (displayed=="true"){

            }
            else{
                localStorage.setItem("displayedToast", "true")
                this.displayToast()
            }
        }
    
    })

    this.AuthUserServe.$isConnectUser.subscribe((isConnect : boolean)=>{
        this.isConnectUser = isConnect
        if(this.isConnectUser==true){
            if(displayed == "true"){

            }
            else
            {
                localStorage.setItem("displayedToast", "true")
                this.displayToast()
            }
        }
    })
}
  

  displayToast(){
    setTimeout(() => {
        this.messageService.add({key:"myKey1",severity:'success', summary: 'Success', detail: 'You are connected'})
    }, 200);
  }

  getStarted(){
    this.router.navigate(['auth'])
  }

}