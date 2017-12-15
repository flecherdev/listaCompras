import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ProductoListaService } from '../../services/producto-list/producto-list.service';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../../models/producto/producto.models';
import { SettingProvider } from '../../providers/setting/setting';
import { ActionSheetController } from 'ionic-angular'


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoListaRef$: Observable<Producto[]>;
  selectTheme:String;

  constructor(public navCtrl: NavController, private productos: ProductoListaService,
     private setting: SettingProvider,public actionSheetCtrl: ActionSheetController) {
    this.setting.getActiveProfesional().subscribe(val => this.selectTheme = val);

    this.productoListaRef$ = this.productos
    .traerListaProductos()
    .snapshotChanges()
    .map( changes => { 
      return changes.map( c => ({
        key: c.payload.key,
        ...c.payload.val(),
      }));
    });
  }

  temaArgentina(){
    this.setting.setActiveProfesional('argentina-theme');
  }

  temaProfesional(){
    this.setting.setActiveProfesional('profesional-theme');
  }

  temaNaif(){
    this.setting.setActiveProfesional('naif-theme');
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Elergir un tema',
      
      buttons: [
        {
          text: 'Profesional',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.temaProfesional();
          }
        },
        {
          text: 'Argentina',
          handler: () => {
            console.log('Archive clicked');
            this.temaArgentina();
          }
        },
        {
          text: 'Naif',
          handler: () => {
            console.log('Archive clicked');
            this.temaNaif();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
