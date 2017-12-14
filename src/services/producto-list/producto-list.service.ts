import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Producto } from '../../models/producto/producto.models';


@Injectable()
export class ProductoListaService{

    private productoListataRef = this.db.list<Producto>('produto-lista');
    
    constructor(private db:AngularFireDatabase){

    }

    traerListaProductos(){
        return this.productoListataRef;
    }

    agregarProduto(producto: Producto){
        return this.productoListataRef.push(producto);
    }
}