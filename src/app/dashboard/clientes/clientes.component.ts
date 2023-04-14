import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent {

  clientes = [{
    codigo:"1000001",
    dni:"01797561",
    nombre:"ESCOBAR MARIA RUTH",
    direccion:"ILAVE T-1 - ILAVE,EL COLLAO,PUNO",
    ciudad:"ILAVE",
    vendedor:"00214 PARILLO CURO JUAN CARLOS",
    dia:"MIERCOLES"
  },
  {
    codigo:"1000002",
    dni:"01844711",
    nombre:"CANDIA SANIZO MARLENI",
    direccion:"JR. ASUNCION 108 REF. PZA. ARMAS  JULI - JULI,CHUCUITO,PUNO",
    ciudad:"JULI",
    vendedor:"00214 PARILLO CURO JUAN CARLOS",
    dia:"LUNES"
  },]

  loading: boolean = false;


  
}
