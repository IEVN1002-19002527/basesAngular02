import { Component } from '@angular/core';
import { Heroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {

  listFilter:string='';

  muestraImg:boolean=true;
  showImage(){
    this.muestraImg=!this.muestraImg;
  }

  heroes:Heroes[]=[
    {
      Imagen:"https://dragonball-api.com/transformaciones/goku_ssj.webp",
      Nombre:"Goku",
      Descripcion:"Kakaroto",
      Race:"Saiyan",
      Ki:9000
    },
    {
      Imagen:"https://dragonball-api.com/transformaciones/vegeta SSJ (2).webp",
      Nombre:"Vegeta",
      Descripcion:"Z Fighter",
      Race:"Saiyan",
      Ki:2500
    },
    {
      Imagen:"https://dragonball-api.com/transformaciones/Piccolo super namekiano.webp",
      Nombre:"Piccolo",
      Descripcion:"Z Fighter",
      Race:"Namekian",
      Ki:2000
    },
    {
      Imagen:"https://dragonball-api.com/characters/bulma.webp",
      Nombre:"Bulma",
      Descripcion:"Z Fighter",
      Race:"Humano",
      Ki:0
    }
  ]

}
