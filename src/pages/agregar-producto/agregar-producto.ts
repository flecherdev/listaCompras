import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Producto } from '../../models/producto/producto.models';
import { ProductoListaService } from '../../services/producto-list/producto-list.service';

/**
 * Generated class for the AgregarProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-producto',
  templateUrl: 'agregar-producto.html',
})
export class AgregarProductoPage {

  producto : Producto = {
    nombre:'',
    cantidad:0,
    precio:0,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private productos: ProductoListaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarProductoPage');
  }

  agregarProducto(producto: Producto){
    this.productos.agregarProduto(producto).then(ref => {
      console.log(ref.key); 
      this.navCtrl.setRoot('HomePage',{key:ref.key});
    });
  }

}
