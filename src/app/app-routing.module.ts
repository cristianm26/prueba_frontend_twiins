import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './components/paises/paises.component';
import { NewpaisComponent } from './components/paises/newpais/newpais.component';
import { EditpaisComponent } from './components/paises/editpais/editpais.component';

const routes: Routes = [
  { path: '', component: PaisesComponent },
  { path: 'create', component: NewpaisComponent },
  { path: 'edit/:id', component: EditpaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
