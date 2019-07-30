import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {ColDataService } from 'src/app/services/col-data.service';


// export interface collector_r {
//   latitude_: number,
//   longitude_: number
// }
// const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})

export class CollectorRouteService implements Resolve<any>  {

  collector_r: any=[];
  constructor(private storage: Storage, private coldataService: ColDataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let id = route.paramMap.get('id');
    return this.coldataService.getRoute(id);
  }
  
  
  // addRoute(c_r1: collector_r): Promise<any> {
  //   return this.storage.get(ITEMS_KEY).then((c_r2: collector_r[]) => {
  //     if (c_r2) {
  //       c_r2.push(c_r1);
  //       return this.storage.set(ITEMS_KEY, c_r2);
  //     } else {
  //       return this.storage.set(ITEMS_KEY, [c_r1]);
  //     }
  //   });
  // }

  // getRoute(): Promise<collector_r[]> {
  //     return this.storage.get(ITEMS_KEY);
  // }
  
}
