import { ErrorHandler,NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SMS } from '@ionic-native/sms/ngx';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { ServerService } from 'src/app/services/server.service';
import { DatasourceService } from 'src/app/services/datasource.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
  
   

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    ServerService,
    Camera,
    CallNumber,
    DatasourceService,
    ServerService,
    
    SMS,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
