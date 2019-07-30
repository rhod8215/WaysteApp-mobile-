import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  constructor() { }
  enable_edit:boolean =true;
  ngOnInit() {
  }

  enableAllinput(){
    this.enable_edit = false;
  }
  saveEditedProfile(){
    if (this.enable_edit == false){
      this.enable_edit = true;
    }
    
  }

}
