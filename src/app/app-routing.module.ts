import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgrgarPropietarioComponent } from './agrgar-propietario/agrgar-propietario.component';
import { EditarPropietarioComponent } from './editar-propietario/editar-propietario.component';
import { PropietarioComponent } from './propietario/propietario.component';

const routes: Routes = [
  { path: "propietarios", component: PropietarioComponent },
  { path: "propietarios/agregar", component: AgrgarPropietarioComponent },
  { path: "propietarios/editar/:id", component: EditarPropietarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
