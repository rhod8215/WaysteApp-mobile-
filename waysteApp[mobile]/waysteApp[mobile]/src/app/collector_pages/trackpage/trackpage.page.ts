
import { Component, NgZone, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx';
import {NavController,Platform,ToastController} from '@ionic/angular';

import { NativeGeocoder,  NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { CollectorChatPage } from 'src/app/modals/collector-chat/collector-chat.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DatasourceService } from 'src/app/services/datasource.service';
import { ServerService } from 'src/app/services/server.service';




declare var google;


@Component({
  selector: 'app-trackpage',
  templateUrl: './trackpage.page.html',
  styleUrls: ['./trackpage.page.scss'],
})
export class TrackpagePage implements OnInit {
  


  @ViewChild('map') mapElement: ElementRef;
  private map: any;
  address:string;
  latLng:any;
  user_marker:any;
  collector_markers:any;
  dispose: any = [];
  distance_km:any=10000;
  wayste_collectors:any='';
  markers:any;
  mapOptions:any;
  
  currentMapTrack = null;
 
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  positionSubscription: Subscription;
  start:any ='';
  end:any ='';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(
      public serverService: ServerService,
      private ngZone: NgZone,
      private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder,
      private storage:Storage, 
      private plt:Platform,
      public modalController: ModalController,
      private callNumber: CallNumber,
      private router: Router,
      public datasource:DatasourceService,
      public nvctrl:NavController
      
      
      ) { 
//     this.serverService.collector_d().subscribe(data =>{
//       this.datasource.collectorsource = data.json();
      
//   });
//   this.serverService.getData().subscribe(data =>{
//     this.datasource.source = data.json();

    
// });

  }

    
  

  async Chat_cModal(){

    const modal = await this.modalController.create({
      component: CollectorChatPage,
      componentProps: { value: 123 }
    });
    return await modal.present();

    
  }

  ngOnInit() {

    // this.initial_map();
    this.ionViewDidLoad();
    

    // this.isTracking = true;
    // //this.trackedRoute = [];
 
    // this.positionSubscription = this.geolocation.watchPosition()
    //   .pipe(
    //     filter((p) => p.coords !== undefined) //Filter Out Errors
    //   )
    //   .subscribe(data => {
    //     setTimeout(() => {
    //       this.datasource.collector_route.push({ lat: data.coords.latitude, lng: data.coords.longitude });
    //       this.redrawPath(this.datasource.collector_route);
    //     }, 0);
    //   });
  
  }

  ionViewDidLoad() {
    this.initMap();
    this.calculateAndDisplayRoute();
    // this.plt.ready().then(() => {
    //   this.loadHistoricRoutes();
      
    //   var myStyles =[
    //     {
    //         featureType: "poi",
    //         elementType: "labels",
    //         stylers: [
    //               { visibility: "off" }
    //         ]
    //     }
    // ];
      
    //   let mapOptions = {
    //     zoom: 13,
    //     disableDefaultUI: true,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     styles: myStyles 
    //   }
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    //   this.geolocation.getCurrentPosition().then(pos => {
    //     let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    //     this.map.setCenter(latLng);
    //     this.map.setZoom(16); 
    //   }).catch((error) => {
    //     console.log('Error getting location', error);
    //   });
    // });
  }

  initMap() {
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
 
     
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.directionsDisplay.setMap(this.map);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  calculateAndDisplayRoute() {
    
    // for(let collector_add of this.datasource.collectorsource){
    //   this.start = collector_add.address;
    // }
    //for (let req_ of this.datasource.source){
        //this.end = req_.collected_at;
      this.directionsService.route({
        origin: 'Makati City',
        destination: 'Mandaluyong City',
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        } else {
          console.log('Error getting location');
        }
      });
   // }
    
  }

  // loadHistoricRoutes() {
  //   this.storage.get('routes').then(data => {
  //     if (data) {
  //       this.previousTracks = data;
  //     }
  //   });
  // }


  // calltheClient(number) {
  //   this.callNumber.callNumber(number, true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));
  // }

  // startTracking() {
  //   this.isTracking = true;
  //   //this.trackedRoute = [];
 
  //   this.positionSubscription = this.geolocation.watchPosition()
  //     .pipe(
  //       filter((p) => p.coords !== undefined) //Filter Out Errors
  //     )
  //     .subscribe(data => {
  //       setTimeout(() => {
  //         this.datasource.collector_route.push({ lat: data.coords.latitude, lng: data.coords.longitude });
  //         this.redrawPath(this.datasource.collector_route);
  //       }, 0);
  //     });
 
  // }

//   redrawPath(path) {
//     if (this.currentMapTrack) {
//       this.currentMapTrack.setMap(null);
//     }
 
//     if (path.length > 1) {
//       this.currentMapTrack = new google.maps.Marker({
//         path: path,
//         geodesic: false,
//         strokeColor: '#0000FF',
//           strokeOpacity: 0.8,
//           strokeWeight: 2,
//           fillColor: '#0000FF',
//           fillOpacity: 0.35,
//           draggable: true
//       });
//       this.currentMapTrack.setMap(this.map);
//     }
//   }

//   stopTracking() {
//     let newRoute = { finished: new Date().getTime(), path: this.datasource.collector_route };
//     this.previousTracks.push(newRoute);
//     this.storage.set('routes', this.previousTracks);
   
//     this.isTracking = false;
//     this.positionSubscription.unsubscribe();
//     this.currentMapTrack.setMap(null);
//   }
   
//   showHistoryRoute(route) {
//     this.redrawPath(route);
//   }
 }
