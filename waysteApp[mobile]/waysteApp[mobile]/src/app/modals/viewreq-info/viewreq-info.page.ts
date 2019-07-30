import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ServerService } from 'src/app/services/server.service';
import { DatasourceService } from 'src/app/services/datasource.service';

@Component({
  selector: 'app-viewreq-info',
  templateUrl: './viewreq-info.page.html',
  styleUrls: ['./viewreq-info.page.scss'],
})
export class ViewreqInfoPage implements OnInit {
  mod_firstname: string;
  mod_lastname : string;
  mod_address: string;
  mod_accepted: number;
  public toggle: boolean = false;


  

  
  constructor(private modalController: ModalController, 
              public navParams: NavParams,
              public datasource:DatasourceService,
              public serverservice: ServerService) { 

    this.mod_firstname = this.navParams.get('firstname');
    this.mod_lastname = this.navParams.get('lastname');
    this.mod_address = this.navParams.get('address');
   // this.mod_accepted = this.navParams.get('is_accepted');
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss();
  }

 
  updateItem(){
    let i = { "id": this.datasource.tempdata.id,"is_accepted": 1 };
    let result = this.serverservice.update(i);
    let index = this.datasource.source.indexOf(this.datasource.tempdata);
    this.datasource.source[index] = i;
    console.log(result);
    this.toggle = false;
  }



}
