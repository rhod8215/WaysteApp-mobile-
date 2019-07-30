
import { Component, NgZone,OnInit, ViewChild, ElementRef } from '@angular/core';


import {Platform} from '@ionic/angular';
import { Geolocation  } from '@ionic-native/geolocation/ngx';

import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
 
import { ServerService } from 'src/app/services/server.service';
import { DatasourceService } from 'src/app/services/datasource.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ChatmodalPage} from 'src/app/modals/chatmodal/chatmodal.page';

import { ModalController,NavController} from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';
import { DrawerState } from 'ion-bottom-drawer';
import { LoadingController } from '@ionic/angular';





declare var google;




@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
  providers:[ServerService]
})
export class TrackerPage  {
 
  
  


  constructor(
     
      private route: ActivatedRoute, private router: Router,
      private ngZone: NgZone,
      private geolocation: Geolocation,
      
     
      private storage:Storage, 
      private plt:Platform,
      private camera: Camera,
      public modalController: ModalController,
      private callNumber: CallNumber,
      public Navcontroller: NavController,
      public datasource:DatasourceService,
      
      public serverservice: ServerService,
      public alertController: AlertController,
      public loadingController: LoadingController
      
      ) {

        this.serverservice.waste_list_show().subscribe(data =>{
          this.datasource.source = data.json();  
      });
       
        
       
       }

      async openModal(){
        const modal = await this.modalController.create({
          component: ChatmodalPage,
        })
        return await modal.present();
      }


  @ViewChild('map') mapElement: ElementRef;
  private map: any;
  address:string;
  latLng:any;
  user_marker:any;
  collector_markers:any;
  dispose: any = [];
  distance_km:any=10000;
  wayste_collectors:any='';
  trash_holder:any=[];
  markers:any;
  mapOptions:any;
  image:any='';
  data:any;
  common_place:any = '';
  marker_logo:any='';
  

  fab_but = false; //this is after the dipose button
  currentMapTrack = null;
  ishidden =false;
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  positionSubscription: Subscription;
  dispose_b = false;
  info_km = false;
  captured_p =false;
  isDisabled:boolean =true;
  
  shouldBounce = true;
  disableDrag = false;
  dockedHeight = 100;
  distanceTop = 100;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 150;
  b_drawer:boolean=false;

  



  ngOnInit() {
   
    this.presentLoading();
    

    

  }
 
 

  display_map() {
    
    
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      var myStyles =[
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                  { visibility: "off" }
            ]
        }
    ];
      let mapOptions = {
        center: this.latLng,
        zoom: 12,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: myStyles 
        
        
      
      }
 
      // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map);
        // this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });
      // user_marker
      this.user_marker = new google.maps.Marker({
        position: new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude),
        map: this.map,
        //draggable: true,
        icon: {
          url: 'assets/waysteLogo/person.png',
          scaledSize: new google.maps.Size(20, 30)
        }
        //animation: google.maps.Animation.DROP
        
        
      });

     
      
      // collector marker
     

       

      
      
 
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    
  }




  // Nearby places ======================================================
   
async checkwastecollect(){
  
 
  
  if (this.wayste_collectors != ''){

    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure of these?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
            this.wayste_collectors = '';
          }
        }, {
          text: 'Yes',
          handler: () => {
            
            this.trash_holder.push(this.wayste_collectors);

            if (this.trash_holder[0].length > 1){
              console.log('gwapa ko', this.trash_holder);
              for(var i=0;  this.trash_holder[0].length > i; i++){
                if(this.trash_holder[0][i] == 'Kitchen Wastes' || this.trash_holder[0][i]== 'Hazardous Wastes'){
                 this.common_place="Materials Recovery Facility";
                 this.marker_logo="assets/waysteLogo/mrf.png";
               
                }
              }
            } else if(this.trash_holder[0].length == 1 && this.trash_holder[0][0] == 'Kitchen Wastes'){
       
                    this.common_place="hog farms";
                    this.marker_logo="assets/waysteLogo/hog.png";
                   
       
            }else if(this.trash_holder[0].length == 1 && this.trash_holder[0][0] == 'Hazardous Wastes'){
       
             this.common_place="Materials Recovery Facility";
             this.marker_logo="assets/waysteLogo/mrf.png";
          
       
           }else{
             this.common_place="junk shops";
             this.marker_logo="assets/waysteLogo/JS2.png";
           
           }
           
            this.ishidden =true;
            this.info_km = true;
            this.nearbyPlace();
             //console.log('Confirm Okay', this.trash_holder);
          }
        }
      ]
    });
  
    await alert.present();




    //==================after confirmation=======================   
    
     
     //console.log('nunsa man ka', this.trash_holder[0][0]);
     
   

  }else{

    this.display_map();
    this.wayste_collectors='';
    this.trash_holder=[];
    this.ishidden =false;
    this.info_km = false;
    this.b_drawer =false;
  

  }
}
  nearbyPlace(){
    this.display_map();
    
    
    this.collector_markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.distance_km,
              keyword: [this.common_place]
             //openNow: 'True'
            }, (results, status) => {
                this.callback(results, status);
            });
  }

  callback(results, status) {
    
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.collectorMarker(results[i]);

    
        
        
        
      }
    }
  }

  
  collectorMarker(place){
    var placeLoc = place;
    console.log('placeLoc',placeLoc);
    
  this.collector_markers = new google.maps.Marker({
    map: this.map,
    position: place.geometry.location,
    title:placeLoc.name,
    icon:{
              url: this.marker_logo,
              scaledSize: new google.maps.Size(20, 30)
            }
  
});

let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.collector_markers, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.collector_markers);
      });
    });


    
  }
  
 

    
  



  trackingbut(){
      this.isTracking = true;
      this.info_km = false;
      this.dispose_b =false;
      this.captured_p= false;
      //this.fab_but =true;
      this.b_drawer =true;
  }
    

    openCam(){
      this.ishidden =false;
      

      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      
      this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64 (DATA_URL):
       //alert(imageData)
       this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
      }, (err) => {
       // Handle error
       alert("error "+JSON.stringify(err))
      });

      // hiding this button and showing the other button

      this.dispose_b = true;
      this.captured_p =true;

    }

   



    callNow(number) {
      this.callNumber.callNumber(number, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    }

    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 6000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      this.isDisabled=false;
      this.display_map();
     
    }
   
  
    

}