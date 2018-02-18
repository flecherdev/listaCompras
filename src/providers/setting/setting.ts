import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

// Establece por defecto el tema profesional el cual luego se puede 
// cambiar con otros temas adicionales

@Injectable()
export class SettingProvider {

  private theme: BehaviorSubject<String>;

  constructor() {
    this.theme = new BehaviorSubject('profesional-theme');
    localStorage.setItem('tema',"profesional");
  }

  setActiveProfesional(value){
    this.theme.next(value);
  }

  getActiveProfesional(){
    return this.theme.asObservable();
  }

  setTemaBoton(tipoLetra,sizeLetra,colorLetra,colorBoton){
    let style = {
      'background-color': 'colorBoton',
      'color' : 'colorLetra',
      'font-size': 'sizeLetra',
      'font-family': 'tipoLetra'
    }

    return style;
  }

  setTemaNav(colorNav){
    let style = {
      'background-color': 'red'
    }
      
    return style;
  }

  setTemaBackgroud(colorFondo){
    let style = {
      'background-color': "colorFondo",
    }

    return style;
  }

  setTemaLetra(colorLetra,sizeLetra,tipoLetra){
    let style = {
      'color' : "colorLetra",
      'font-size': "sizeLetra",
      'font-family': "tipoLetra"
    }

    return style;
  }

 

}
