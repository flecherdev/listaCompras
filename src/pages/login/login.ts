import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioItem } from '../../models/usuario-item/usuario-item.interface';

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

  miUsuario = {} as UsuarioItem;
  usuario:any = [{nombre:'Pepe',clave:'1234',nick:'p3p3',edad:30},
                 {nombre:'Mauricio',clave:'1234',nick:'m4ur1',edad:13},
                 {nombre:'Nestor',clave:'1234',nick:'n3st0r',edad:23}];
  nick:string;
  clave:string;
  

  constructor(private navCtrl: NavController, private navParams: NavParams) {

  }

  ingresar(){

  }

}
