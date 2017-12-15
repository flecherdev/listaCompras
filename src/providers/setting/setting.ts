import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

// Establece por defecto el tema profesional el cual luego se puede 
// cambiar con otros temas adicionales

@Injectable()
export class SettingProvider {

  private theme: BehaviorSubject<String>;

  constructor() {
    this.theme = new BehaviorSubject('profesional-theme');
  }

  setActiveProfesional(value){
    this.theme.next(value);
  }

  getActiveProfesional(){
    return this.theme.asObservable();
  }

}
