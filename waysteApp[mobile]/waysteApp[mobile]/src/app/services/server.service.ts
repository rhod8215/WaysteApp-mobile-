import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import {HttpClient  } from '@angular/common/http';
import { DatasourceService } from 'src/app/services/datasource.service';
import { Storage } from '@ionic/storage';




@Injectable({
  providedIn: 'root'
})
export class ServerService {
  public token: any;
  collector_details:string = 'https://projectwayste.000webhostapp.com/api/collector-showbyid/' + 1;


  req_list:string  = 'https://projectwayste.000webhostapp.com/api/request-show-by-collector-id/'+ 1;
  accepted_list:string = 'https://projectwayste.000webhostapp.com/api/show-all-accepted-requests-of-collector/' + 1;
  waste_list:string = 'https://projectwayste.000webhostapp.com/api/waste-show';
  update_active_status:string ='https://projectwayste.000webhostapp.com/api/collector-updateactivestatus/' + 1;
  household_reg:string ='https://projectwayste.000webhostapp.com/api/household-create';
  user_login:string = 'https://projectwayste.000webhostapp.com/api/user-post/';
  constructor(public http: Http,public datasource: DatasourceService, public storage:Storage) 
  {


   }

  //  checkAuthentication(){

  //   return new Promise((resolve, reject) => {
  //   this.storage.get('token').then((value) => {
 
  //     this.token = value;

  //     resolve(this.token)


  //   }) 
  // });        



  // }

  //  login(credentials){
  //   return new Promise((resolve, reject) => {
  //       let headers = new Headers();
  //      // headers.append('Content-Type', 'application/json');
  //      headers.append('Access-Control-Allow-Origin' , '*');
  //      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  //      headers.append('Accept','application/json');
  //      headers.append('content-type','application/json');
     
  //       this.http.post(this.user_login, JSON.stringify(credentials), {headers: headers})
  //         .subscribe(res => {
  //           let data = res.json();
  //           this.token = data.token;
  //           this.storage.set('token', data.token);
           
  //           resolve(data);
  //  }, (err) => {
  //           reject(err);
          
  //         });  });
 
  // }

   AddHousehold(credentials){

    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(this.household_reg, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
   }

   getData(){

    return this.http.get(this.req_list)
    .map(res => res);
 
  }
  collector_d(){
    return this.http.get(this.collector_details)
    .map(res => res);
  }

  waste_list_show(){
    return this.http.get(this.waste_list)
    .map(res => res);
  }

  all_acceptedReq(){

    return this.http.get(this.accepted_list)
    .map(res => res);
  }

  
  update(collector):any {
    let result:any;
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    this.http.put(this.update_active_status,JSON.stringify(collector), { headers: headers })
    .map(res => res)
    .subscribe(data =>{
          result = data;  
     });

    return result;
  }

  
  

  

  

 
}
