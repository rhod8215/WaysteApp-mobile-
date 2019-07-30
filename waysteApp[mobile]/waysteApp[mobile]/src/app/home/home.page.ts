import { Component } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { DatasourceService } from 'src/app/services/datasource.service';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
//import { analyzeAndValidateNgModules } from '@angular/compiler';
import { RouterModule, Routes, Router, NavigationExtras} from '@angular/router';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logIndata: any = {};
  tempVar: any;
  password: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    public serverService:ServerService,
    public dataSource: DatasourceService,
    public http:Http, 
    private router: Router,
    public alertCtrl: AlertController
    )
    {
      this.logIndata.email = '';
      this.logIndata.password = '';
    }


  //   logIn() {
    

  //     if (this.logIndata.email != '' && this.logIndata.password != ''){
      
  //       let headers = new Headers();
  //       headers.append('Content-Type', 'application/json');
  
  //       let option = new RequestOptions({headers: headers});
  //       let url: string = 'http://127.0.0.1:8000/api/user-post';
  
  //       let dataPost = JSON.stringify({
  //             email: this.logIndata.email,
  //             password: this.logIndata.password,
  //           });
  
  //       this.http.post(url, dataPost, option)
  //       .pipe(map(res => res.json()))
  //       .subscribe( data => {
          
  //         console.log(data)
  //         this.tempVar = data
  //         //this.tempVar.push(data);
  //         //this.logIndata.result = data;
  //         //console.log(tempVar);
  //       });
  
  //       console.log('tempVar is : ', this.tempVar);
  //       if (this.tempVar != null){//if there is result the user will be redirected to his homepage, else prompt
  // // tslint:disable-next-line: prefer-const
  //         let navigationExtras: NavigationExtras = {
  //           state: {
  //             special: this.tempVar
  //           }
  //         }
  //         this.router.navigate(['tabs/tracker'], navigationExtras);
  //         console.log('tempVar2s is : ', this.tempVar);
  //       }else{
  //       //
  //         console.log('No Username or Email has found!');
  //         this.router.navigate(['home']);
  //       }
  //     }else{
  //       console.log('Invalid Username and Password');
  //     }
  
  //   }

    async presentPrompt() {
      const alert = await this.alertCtrl.create({
        header: 'PASSWORD RESET',
     
        inputs: [
          {
            name: 'Email:',
            placeholder: 'Enter your email here...'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Reset',
            handler: data => {
              console.log('Sending')
            }
          }
        ]
      });
     await  alert.present();
    }
    
   
    hideShowPassword() {
        this.password = this.password === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

    

}
