import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { EquiposComponent } from './equipos/equipos.component';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path:'',
    children:[
      {
        path:"home",
        component:HomeComponent
      },

      { path:"clientes",
        component: ClientesComponent
        
      },
      { path:"equipos",
        component: EquiposComponent
      },
      { path: "seguimiento",
        component: SeguimientoComponent
      },
      {
        path:'**',
        redirectTo:'home'
      }
    ] 
  
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
