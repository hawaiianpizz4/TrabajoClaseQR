import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Registro } from '../models/registro.models';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Registro[]=[];

  constructor(private navCtrl: NavController) { }

  guardarRegistro(text: string){
    //cada vez que navegue se va a ir para alla 
    this.navCtrl.navigateForward("/tabs/tab2");

    const nuevo_registro=new Registro(text);
    this.historial.unshift(nuevo_registro);
  }
}

