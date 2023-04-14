import { Component } from '@angular/core';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styles: [
  ]
})
export class SeguimientoComponent {

  selectedProduct:String = "";

  products = [{
    code:"1000001",
    name:"01797561",
    nombre:"ESCOBAR MARIA RUTH",
    category:"ILAVE T-1 - ILAVE,EL COLLAO,PUNO",
    quantity:"ILAVE",
    vendedor:"00214 PARILLO CURO JUAN CARLOS",
    dia:"MIERCOLES"
  },
  {
    code:"1000002",
    name:"01844711",
    nombre:"CANDIA SANIZO MARLENI",
    category:"JR. ASUNCION 108 REF. PZA. ARMAS  JULI - JULI,CHUCUITO,PUNO",
    quantity:"JULI",
    vendedor:"00214 PARILLO CURO JUAN CARLOS",
    dia:"LUNES"
  },];

  imprime(){

    console.log(this.selectedProduct);
  }

}
