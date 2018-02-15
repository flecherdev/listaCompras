import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ProductoListaService } from '../../services/producto-list/producto-list.service';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../../models/producto/producto.models';
import { SettingProvider } from '../../providers/setting/setting';
import { ActionSheetController } from 'ionic-angular'
import { TemaCustom } from '../../models/tema-custom/tema-custom';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoListaRef$: Observable<Producto[]>;
  selectTheme:String;
  //tema custom
  miTema:TemaCustom;
  tema:string="";

  constructor(public navCtrl: NavController, private productos: ProductoListaService,
    private setting: SettingProvider,public actionSheetCtrl: ActionSheetController) {
    this.setting.getActiveProfesional().subscribe(val => this.selectTheme = val);
    
    //tema custom
    this.miTema = {colorFondo:"",colorLetra:"",colorBoton:"",colorNav:"",sizeLetra:"",tipoLetra:"",radioButton:"",iconoAgregar:"",iconoTema:""};
    this.tema = localStorage.getItem('tema');
    console.log("Tema constructor: "+this.tema);
    if(this.tema == "custom"){
      console.log("Ingresa a custom");
      this.miTema = JSON.parse(localStorage.getItem('miTema'));
    }else{
      this.miTema.iconoAgregar = "basket";
      this.miTema.iconoTema = "brush";
      console.log(this.miTema);
    }

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

  ionViewDidLoad() {
    console.log("Tema: "+this.tema);
    console.log(this.miTema);
    console.log(this.miTema.colorFondo);
    console.log('------------------------');
  }

  // ------  Seleccion de temas ------- //
  temaArgentina(){
    localStorage.clear();
    localStorage.setItem('tema',"argentina");
    this.setting.setActiveProfesional('argentina-theme');
  }

  temaProfesional(){
    localStorage.clear();
    localStorage.setItem('tema',"profesional");
    this.setting.setActiveProfesional('profesional-theme');
  }

  temaNaif(){
    localStorage.clear();
    localStorage.setItem('tema',"naif");
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
            console.log('Profesional clicked');
            this.temaProfesional();
          }
        },
        {
          text: 'Argentina',
          handler: () => {
            console.log('Argentina clicked');
            this.temaArgentina();
          }
        },
        {
          text: 'Personalizable',
          handler: () => {
            console.log('Personalizable clicked');
            //this.temaArgentina();
            this.navCtrl.push('CustomizablePage');
          }
        },
        {
          text: 'Naif',
          handler: () => {
            console.log('Naif clicked');
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
