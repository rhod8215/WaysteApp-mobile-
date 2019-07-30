import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColDataService {

  private data = [];

  constructor() { }

  setRoute(id, data) {
    this.data[id] = data;
  }
 
  getRoute(id) {
    return this.data[id];
  }
}
