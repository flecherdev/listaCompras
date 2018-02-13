import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SettingProvider } from '../../providers/setting/setting';

import { TemaCustom } from '../../models/tema-custom/tema-custom';
import { HomePage } from '../home/home';

/**
 * Generated class for the CustomizablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customizable',
  templateUrl: 'customizable.html',
})
export class CustomizablePage {


  selectTheme:String;
  miTema:TemaCustom = null;
  tema:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    private setting: SettingProvider) {
      this.miTema = {colorFondo:"",colorLetra:"",sizeLetra:"",tipoLetra:""};
      if(this.tema == "custom"){
        console.log("se customizo a defecto");
        //this.setting.setActiveProfesional('variables.scss');
        this.miTema = JSON.parse(localStorage.getItem('miTema'));
      }
      this.setting.getActiveProfesional().subscribe(val => this.selectTheme = val);
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizablePage');

    
  }*/

  


  showFont() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Fuente');

    alert.addInput({
      type: 'radio',
      label: 'Righteous',
      value: 'Righteous',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Lobster',
      value: 'Robster',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Boogaloo',
      value: 'Boogaloo',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        //this.testRadioOpen = false;
        //this.testRadioResult = data;
       // this.typeFont(data);
        this.miTema.tipoLetra = data;
      }
    });
    alert.present();
  }

  showSize() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Tamaño');

    alert.addInput({
      type: 'radio',
      label: 'Pequeño',
      value: '5px',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Mediano',
      value: '10px',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Grande',
      value: '12px',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        //this.testRadioOpen = false;
        //this.testRadioResult = data;
        //this.sizeFont(data);
        this.miTema.sizeLetra = data;
      }
    });
    alert.present();
  }

  // ------ Funciones para asignacion de datos -------- //


  typeFont(data){
    console.log('Tipo de Fuente: ' + data);
    this.miTema.tipoLetra = data;
  }



  
  aceptar(){
    localStorage.setItem('miTema', JSON.stringify(this.miTema));
    localStorage.setItem('tema',"custom");
    this.setting.setActiveProfesional('variables.scss');
    this.navCtrl.setRoot('HomePage');
  }

  cancelar(){
    this.navCtrl.setRoot('HomePage');
  }

}
