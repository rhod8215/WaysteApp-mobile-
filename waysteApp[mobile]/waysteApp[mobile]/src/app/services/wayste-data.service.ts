import { Injectable } from '@angular/core';
import { Wayste } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class WaysteDataService {



  waysteD = [];
  wayste_d: Wayste;

  constructor() { }

  setgmap_place(data) {
    this.waysteD = data;
  }

  getgmap_place() {
    return this.waysteD;
  }

  setwayste_d(data) {
    this.wayste_d = data;
  }

  getwayste_d() {
    return this.wayste_d;
  }
}
