import { ServerService } from 'src/app/services/server.service';
import { DatasourceService } from 'src/app/services/datasource.service';
import { Component, NgZone, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Geolocation  } from '@ionic-native/geolocation/ngx';
import {NavController,Platform} from '@ionic/angular';

import { NativeGeocoder,NativeGeocoderResult,NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import "rxjs/add/operator/map";
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';

import { ViewreqInfoPage } from 'src/app/modals/viewreq-info/viewreq-info.page';

declare var google;

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.page.html',
  styleUrls: ['./request-list.page.scss'],
  providers:[ServerService]
})
export class RequestListPage implements OnInit {

  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;
  @ViewChild('map') mapElement: ElementRef;

  dataList:any;
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

  users = [];
  page = 0;
  maximumPages = 3;

  req_hideT = false; 
  req_list= false;
  modal_id =0;


   geocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
      };

  constructor(

      private ngZone: NgZone,
      private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder,
      private storage:Storage, 
      private plt:Platform,
      public modalController: ModalController,
      private httpClient: HttpClient,
      public navCtrl: NavController,
      public datasource:DatasourceService,
      public serverservice: ServerService
  ) {

    // this.dataList = [];
    
    // for (let i = 0; i < 25; i++) { 
    //   this.dataList.push("Item number "+this.dataList.length);
    // }
    //=============================================================
    
    this.serverservice.getData().subscribe(data =>{
      this.datasource.source = data.json();  
  });
  
    
  


   }
   

   loadData(event) {
    
    setTimeout(() => {
     
      

      console.log('Done');
      for (let adrss of this.datasource.source){
        console.log('called address', adrss.collected_at);
        // this.geocode_func(adrss.collected_at);
      }
      this.serverservice.getData().subscribe(data =>{
        this.datasource.source = data.json();  
      });
    event.target.complete();
    
 
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.datasource.source.length == 100) {
        event.target.disabled = true;
      }

      
    }, 500);
  }
 
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  async presentModal(item1, item2, item3, item4){
    const modal = await this.modalController.create({
      component: ViewreqInfoPage,
      componentProps: {

        'firstname': item1,
        'lastname': item2,
        'address': item3,
        'is_accepted':item4
        }
    });
    return await modal.present();
  }

  ngOnInit() {

    
  
    this.initMap();
    
   
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
     // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map);
        // this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });
//=======================================
      // user_marker
      // this.user_marker = new google.maps.Marker({
      //   position: new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude),
      //   map: this.map,
        
       
        
      // });

      
 
    }).catch((error) => {
      console.log('Error getting location', error);
    });

   
  }

  
  geocode_func(address){
    
    // this.nativeGeocoder.forwardGeocode(address)
    // .then((results: NativeGeocoderResult[] ) => this.rescall(results[0].latitude, results[0].longitude))
    // .catch((error: any) => console.log(error));
    
    let geocoder_ = new google.maps.Geocoder(); 
    geocoder_.geocode({'address':address},(result,status) => { this.callback(result,status)});
    
    
  
  }
 

  callback(result,status){

    if(status == google.maps.GeocoderStatus.OK){
      for (var i = 0; i < result.length; i++){
        this.requestMarkers(result[i]);
      }
    }

    
      
    
      
   
  }




requestMarkers(results){
  var placeLoc = results;
  console.log('address_request',placeLoc);
  



this.collector_markers = new google.maps.Marker({
  map: this.map,
  position: results.geometry.location,
  title:placeLoc.name,
  icon:{
            url: "assets/waysteLogo/person.png",
            scaledSize: new google.maps.Size(20, 20)
          }

});





    
  

  let infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(this.collector_markers, 'click', () => {
    this.ngZone.run(() => {
      infowindow.setContent(results.name);
      infowindow.open(this.map, this.collector_markers);
    });
  });

}


  
  // loadHistoricRoutes() {
  //   this.storage.get('routes').then(data => {
  //     if (data) {
  //       this.previousTracks = data;
  //     }
  //   });
  // }

  // startTracking() {
  //   this.isTracking = true;
  //   this.trackedRoute = [];
 
  //   this.positionSubscription = this.geolocation.watchPosition()
  //     .pipe(
  //       filter((p) => p.coords !== undefined) //Filter Out Errors
  //     )
  //     .subscribe(data => {
  //       setTimeout(() => {
  //         this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
  //         this.redrawPath(this.trackedRoute);
  //       }, 0);
  //     });
 
  // }
 
  // redrawPath(path) {
  //   if (this.currentMapTrack) {
  //     this.currentMapTrack.setMap(null);
  //   }
 
  //   if (path.length > 1) {
  //     this.currentMapTrack = new google.maps.Polyline({
  //       path: path,
  //       geodesic: true,
  //       strokeColor: '#ff00ff',
  //       strokeOpacity: 1.0,
  //       strokeWeight: 3
  //     });
  //     this.currentMapTrack.setMap(this.map);
  //   }
  // }

  // stopTracking() {
  //   let newRoute = { finished: new Date().getTime(), path: this.trackedRoute };
  //   this.previousTracks.push(newRoute);
  //   this.storage.set('routes', this.previousTracks);
   
  //   this.isTracking = false;
  //   this.positionSubscription.unsubscribe();
  //   this.currentMapTrack.setMap(null);
  // }
   
  // showHistoryRoute(route) {
  //   this.redrawPath(route);
  // }

  req_hideTog(){
    if(this.req_hideT == !false){
      this.req_list = true;
      for (let adrss of this.datasource.source){
        console.log('thank you Lord.', adrss.collected_at);
         this.geocode_func(adrss.collected_at);
      }
    }
    else{
      this.req_list =false;
      this.ngOnInit();
    }
  
  }

  

}
