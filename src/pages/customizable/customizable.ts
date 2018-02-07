import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizablePage');
  }

  showBackgroud() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Fondo');

    alert.addInput({
      type: 'radio',
      label: 'Azul',
      value: 'azul',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Rojo',
      value: 'rojo',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Verde',
      value: 'verde',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        //this.testRadioOpen = false;
        //this.testRadioResult = data;
        this.backgroudColor(data);
      }
    });
    alert.present();
  }

  showFont() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Fuente');

    alert.addInput({
      type: 'radio',
      label: 'Righteous',
      value: 'righteous',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Lobster',
      value: 'lobster',
      checked: false
    });

    alert.addInput({
      type: 'radio',
      label: 'Boogaloo',
      value: 'boogaloo',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        //this.testRadioOpen = false;
        //this.testRadioResult = data;
        this.typeFont(data);
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
        this.sizeFont(data);
      }
    });
    alert.present();
  }

  // ------ Funciones para asignacion de datos -------- //
  backgroudColor(data){
    console.log('Color de Fondo: ' + data);
  }

  typeFont(data){
    console.log('Tipo de Fuente: ' + data)
  }

  sizeFont(data){
    console.log('Tamaño de Letra: ' + data);
  }

}
