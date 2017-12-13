import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioItem } from '../../models/usuario-item/usuario-item.interface';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuarios:any = [{nombre:'Pepe',clave:'1234',nick:'p3p3',edad:30},
                 {nombre:'Mauricio',clave:'1234',nick:'m4ur1',edad:13},
                 {nombre:'Nestor',clave:'1234',nick:'n3st0r',edad:23}];
  nick:string;
  clave:string;
  

  constructor(private navCtrl: NavController, private navParams: NavParams) {

  }

  ingresar(){
    console.log("nick:"+this.nick);
    console.log("clave:"+this.clave);
    for (let index = 0; index < this.usuarios.length; index++) {
      const element:UsuarioItem = this.usuarios[index];
      console.log(element);
      if(this.nick == element.nick && this.clave == element.clave){
        this.navCtrl.setRoot(HomePage,element);
      }
    }
  }

}
