import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ProductoListaService } from '../../services/producto-list/producto-list.service';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../../models/producto/producto.models';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoListaRef$: Observable<Producto[]>;

  constructor(public navCtrl: NavController, private productos: ProductoListaService) {
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

}
