import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'personas', component: PersonasComponent },
  // Otra manera de realizar la ruta, utilizando el concepto Child Route en Angular
  // { path: 'personas', component: PersonasComponent, children: [{ path: 'agregar', component: FormularioComponent },
  // { path: ':id', component: FormularioComponent }]
  // Cuando realices esto, asegurate de implementar el router-outlet en todas las paginas hijas.
  { path: 'personas/agregar', component: FormularioComponent },
  { path: 'personas/:id', component: FormularioComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
