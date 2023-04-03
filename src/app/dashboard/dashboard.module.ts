import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { EquiposComponent } from './equipos/equipos.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ClientesComponent,
    EquiposComponent,
    SeguimientoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
