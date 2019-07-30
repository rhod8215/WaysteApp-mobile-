import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  public source:any[] = [];
  public tempdata:any = '';
  public collector_route: any[] = [];
  public collectorsource:any[] = [];

  constructor() { 

  }
}
