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
  miTema:TemaCustom;
  tema:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    private setting: SettingProvider) {
      this.miTema = {colorFondo:"",colorLetra:"",colorBoton:"",colorNav:"",sizeLetra:"",tipoLetra:"",radioButton:"",iconoAgregar:"",iconoTema:""};
      this.tema = localStorage.getItem('tema');
      this.setting.setActiveProfesional('variables.scss'); //elimina estilos previos
      if(this.tema == "custom"){
        console.log("ingresa a custom");
        //this.setting.setActiveProfesional('variables.scss');
        this.miTema = JSON.parse(localStorage.getItem('miTema'));
        console.log(this.miTema);
      
      }
      this.setting.getActiveProfesional().subscribe(val => this.selectTheme = val);
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizablePage');

    
  }*/

  miTemaBoton(){
    if(this.tema == "custom"){
      this.setting.setTemaBoton(this.miTema.tipoLetra,this.miTema.sizeLetra,this.miTema.colorLetra,this.miTema.colorBoton);
    }
  }

  miTemaNav(){
    if(this.tema == "custom"){
      this.setting.setTemaNav(this.miTema.colorNav);
    }
  }
  
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

    alert.addInput({
      type: 'radio',
      label: 'Montserrat',
      value: "'Montserrat', sans-serif",
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Merriweather',
      value: "'Merriweather', serif",
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Merriweather',
      value: "'Merriweather', serif",
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Josefin Sans',
      value: "'Josefin Sans', sans-serif",
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Hind',
      value: "'Hind', sans-serif",
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Pacifico',
      value: "'Pacifico', cursive",
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Dancing Script',
      value: "'Dancing Script', cursive",
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Francois One',
      value: "'Francois One', sans-serif",
      checked: false
    });

    alert.addButton('Cancelar');//fin
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        this.miTema.tipoLetra = data;
      }
    });
    alert.present();
  }

  showColorNav() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Tamaño');

    alert.addInput({
      type: 'radio',
      label: 'Azul',
      value: 'primary',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Verde',
      value: 'secondary',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Rojo',
      value: 'danger',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Blanco',
      value: 'light',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Negro',
      value: 'dark',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Naranja',
      value: 'naranja',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {

        this.miTema.colorNav = data;
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
      value: '12',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Mediano',
      value: '16',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Grande',
      value: '20',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {

        this.miTema.sizeLetra = data;
      }
    });
    alert.present();
  }

  showIcono() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Tamaño');

    alert.addInput({
      type: 'radio',
      label: 'Estandar',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Medio',
      value: '2',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Profesional',
      value: '3',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        switch (data) {
          case '1':
            this.miTema.iconoAgregar="add-circle";
            this.miTema.iconoTema="brush";
            break;
          case '2':
            this.miTema.iconoAgregar="add";
            this.miTema.iconoTema="bowtie";
            break;
          case '3':
            this.miTema.iconoAgregar="basket";
            this.miTema.iconoTema="settings";
            break;
          default:
            break;
        }
        //this.miTema.colorIcono = data;
      }
    });
    alert.present();
  }

  // ------ Funciones para asignacion de datos -------- //

  aceptar(){
    console.log('-------- en aceptar de customizable ----------');
    console.log(this.miTema);
    localStorage.clear();
    localStorage.setItem('miTema', JSON.stringify(this.miTema));
    localStorage.setItem('tema',"custom");
    
    this.navCtrl.setRoot('HomePage');
  }

  cancelar(){
    this.setting.setActiveProfesional(this.tema);
    this.navCtrl.setRoot('HomePage');
  }

}
