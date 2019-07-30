
import { Component, NgZone, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation/ngx';
import {NavController,Platform} from '@ionic/angular';

import { NativeGeocoder,  NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';

import { ModalController } from '@ionic/angular';
import "rxjs/add/operator/map";
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { ServerService } from 'src/app/services/server.service';
import { DatasourceService } from 'src/app/services/datasource.service';




declare var google;


@Component({
  selector: 'app-accepted-list',
  templateUrl: './accepted-list.page.html',
  styleUrls: ['./accepted-list.page.scss'],
  providers:[ServerService]
})
export class AcceptedListPage implements OnInit {
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
  constructor(

      private ngZone: NgZone,
      private geolocation: Geolocation,
      private nativeGeocoder: NativeGeocoder,
     
      private plt:Platform,
      private httpClient: HttpClient,
      public modalController: ModalController,
      public datasource:DatasourceService,
      public serverservice: ServerService
  ) {

    this.serverservice.all_acceptedReq().subscribe(data =>{
      this.datasource.source = data.json();  
  });
   }

   AcceptData(event) {
    
    setTimeout(() => {
      console.log('Done');
      this.serverservice.all_acceptedReq().subscribe(data =>{
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

  

  ngOnInit() {

    this.Displymap();
  }

  Displymap() {
    
    this.plt.ready().then(() => {
    
 
      let mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: false
      
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.geolocation.getCurrentPosition().then(pos => {
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(16);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    });
    
  }

}
