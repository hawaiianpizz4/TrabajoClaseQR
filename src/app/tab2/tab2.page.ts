import { Component } from '@angular/core';
import { DataLocalService } from '../services/data-local.service';
import { AlertController } from '@ionic/angular';
import { Registro } from '../models/registro.models';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataLocal:DataLocalService, public alerta:AlertController) {}
  
  async abrirRegistro(registro:Registro){
    await this.alerta.create({
      header: registro.nombre + " " + registro.marca, 
      subHeader: registro.proveedor
    }).then(res=>res.present());
    console.log(registro);
  }

  //cargando la pagina
  ionViewWillEnter(){
    console.log("TAB2: viewWillEnter");
  }

  //ya carga toda la pagina
  ionViewDidEnter(){
    console.log("TAB2: ionViewDidEnter");
  }

  
  ionViewWillLeave(){
    console.log("TAB2: ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("TAB2: ionViewDidLeave");
  }

}
